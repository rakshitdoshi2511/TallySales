function BaseChart (target, oArgs) {
    this.init(target, oArgs);
}

BaseChart.prototype.init = function (target, oArgs) {
    this.target = target;

    oArgs = oArgs || {};
    this.width = oArgs.width;
    this.height = oArgs.height;
    this.margin =  oArgs.margin || 0;
};

BaseChart.prototype.empty = function () {
    var now = Date.now(),
        yesterday = now - (60 * 60 * 1000);
    var values = [{
        time: yesterday,
        cpu: 0,
        cpu1:0
    }, {
        time: now,
        cpu: 1,
        cpu1: 1
    }];

    var xScale = this.getXScale(values);
    var yScale = this.getYScale(values);
    var yScale1 = this.getY1Scale(values);

    var xAxis = this.getXAxis(xScale);
    var yAxis = this.getYAxis(yScale);
    var yAxis1 = this.getYAxis(yScale1);

    var svg = d3.select(this.target).append('svg')
        .attr('width', this.width)
        .attr('height', this.height);

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0, ' + (this.height - this.margin) + ')')
            .call(xAxis);

        d3.selectAll('.x.axis .tick text')
            .call(this.xAxisLabel, xScale);

        svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + this.margin + ', 0)')
            .call(yAxis);
    
        svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + this.margin + ', 0)')
            .call(yAxis1);

    return svg;
};


function TimeSeriesChart (target, oArgs) {
    this.init(target, oArgs);
}
TimeSeriesChart.prototype = new BaseChart();

TimeSeriesChart.prototype.render = function (values) {
    if(values.length === 0) {
        return this.empty();
    }
   
    var xScale = this.getXScale(values);
    var yScale = this.getYScale(values);
    var yScale1 = this.getYScale1(values);
   
    var xAxis = this.getXAxis(xScale);
    var yAxis = this.getYAxis(yScale);
    var yAxis1 = this.getYAxis(yScale1);
    
    var line = this.lineGenerator(xScale, yScale);
    var line1 = this.lineGenerator1(xScale, yScale1);

    var svg = d3.select(this.target).append('svg')
        .attr('width', this.width)
        .attr('height', this.height);

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0, ' + (this.height - this.margin) + ')')
            .call(xAxis);

        svg.selectAll('.x.axis .tick text')
            .call(this.xAxisLabel, xScale);

        svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + this.margin + ', 0)')
            .call(yAxis);

        svg.append('path')
            .attr('d', line(values));
        svg.append('path')
             .style("stroke", "red")
            .attr('d', line1(values));

        svg.selectAll('.dot')
            .data(values)
            .enter().append('circle')
                .attr('class', 'dot')
                .attr('r', 3.5)
                .attr('cx', function (d) {
                    return xScale(d.time);
                })
                .attr('cy', function (d) {
                    return yScale(d.cpu);
                })
                .on('mouseover', function (el) {
                    d3.select(this)
                        .attr('r', 5);
                })
                .on('mouseout', function (el) {
                    d3.select(this)
                        .attr('r', 3.5);
                });
        svg.selectAll('.red.dot')
            .data(values)
            .enter().append('circle')
                .attr('class', 'dot')
                .attr('r', 3.5)
                .attr('cx', function (d) {
                    return xScale(d.time);
                })
                .attr('cy', function (d) {
                    return yScale1(d.cpu1);
                })
                .style("fill","red")
                .on('mouseover', function (el) {
                    d3.select(this)
                        .attr('r', 5);
                    d3.select("text").enter.append("text")
                    .text(function(d){
                        alert(d.cpu1);
                        return d.cpu1;
                    });
                })
                .on('mouseout', function (el) {
                    d3.select(this)
                        .attr('r', 3.5);
                });

    return svg;
};

TimeSeriesChart.prototype.getXScale = function (values) {
    return d3.time.scale()
        .domain([values[0].time, values[values.length - 1].time])
        .range([0 + this.margin, this.width]);
};

TimeSeriesChart.prototype.getYScale = function (values) {
    return d3.scale.linear()
        .range([this.height - this.margin, 0])
        .domain([0, d3.max(values, function (d) {
            return d.cpu;
        })]).nice();
};
TimeSeriesChart.prototype.getYScale1 = function (values) {
    return d3.scale.linear()
        .range([this.height - this.margin, 0])
        .domain([0, d3.max(values, function (d) {
            return d.cpu1;
        })]).nice();
};

TimeSeriesChart.prototype.getXAxis = function (scale) {
    return d3.svg.axis()
        .scale(scale)
        .tickSubdivide(true)
        .ticks(d3.time.minutes, 15)
        .orient('bottom');
};

TimeSeriesChart.prototype.getYAxis = function (scale) {
    return d3.svg.axis()
        .scale(scale)
        .ticks(6)
        .tickFormat(d3.format('.0%'))
        .orient('left');
};
TimeSeriesChart.prototype.getYAxis1 = function (scale) {
    return d3.svg.axis()
        .scale(scale)
        .ticks(6)
        .tickFormat(d3.format('.0%'))
        .orient('left');
};

TimeSeriesChart.prototype.lineGenerator = function (xScale, yScale) {
    return d3.svg.line()
        .x(function (d) {
            return xScale(d.time);
        })
        .y(function (d) {
            return yScale(d.cpu);
        });
       
};

TimeSeriesChart.prototype.lineGenerator1 = function (xScale, yScale) {
    return d3.svg.line()
        .x(function (d) {
            return xScale(d.time);
        })
        .y(function (d) {
            return yScale(d.cpu1);
        });
       
};

TimeSeriesChart.prototype.xAxisLabel = function (scale) {
    /*
     * Override this method to customize X Axis labels.
     */
    var timeFormat = d3.time.format('%I:%M %p');
    var dateFormat = d3.time.format('%d %b');

    scale.each(function (d) {
        var text = d3.select(this),
            content = text.text();
        text.text(null)
            .append('tspan')
            .attr('x', 0)
            .text(timeFormat(d));
        text.append('tspan')
            .attr('x', 0)
            .attr('dy', 13).text(dateFormat(d));
    });
};

function SparkLine (target, oArgs) {
    this.init(target, oArgs);
}
SparkLine.prototype = new TimeSeriesChart();

SparkLine.prototype.getXScale = function (values) {
    return d3.time.scale()
        .domain([values[0].time, values[values.length - 1].time])
        .range([0, this.width]);
};

SparkLine.prototype.getYScale = function (values) {
    return d3.scale.linear()
        .range([this.height, 0])
        .domain(d3.extent(values, function (d) {
            return d.cpu;
        }));
};

SparkLine.prototype.render = function (values) {
    var xScale = this.getXScale(values);
    var yScale = this.getYScale(values);

    var xAxis = this.getXAxis(xScale);
    var yAxis = this.getYAxis(yScale);

    var line = this.lineGenerator(xScale, yScale);

    var svg = d3.select(this.target).append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('path')
        .datum(values)
        .attr('class', 'sparkline')
        .attr('d', line(values));

    return svg;
};