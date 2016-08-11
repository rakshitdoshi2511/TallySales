tallySales.factory('Data',function(){
    var users = [{
       id:121,
       name: 'John Doe',
       username: 'john',
       password: 'tally123',
       role: 'user'    
    },{
       id:122,
       name: 'Mark David',
       username: 'mark',
       password: 'tally123',
       role: 'user'     
    },{
       id:123,
       name: 'Administrator',
       username: 'admin',
       password: 'tally123',
       role: 'admin' 
    },{
       id:124,
       name: 'Customer',
       username: 'cstfull',
       password: 'tally123',
       role: 'customer' 
    },{
       id:125,
       name: 'Agent',
       username: 'agent',
       password: 'tally123',
       role: 'agent' 
    }];
    return{
        login: function(username,password){
            var _data = {
                authenticate: false,
                details: {}
            };
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                  _data.authenticate = true;
                  _data.details = users[i];
                  break;
                }
            }
            return _data;
        },
        masterlist: function(){
            
            var _list = [{
                id:1,
                image: 'assets/img/icons/home_120.png',
                value:'Home'
            },
            {
                id:2,
                image: 'assets/img/icons/opportunity_120.png',
                value:'Opportunities'
            },
            {
                id:3,
                image: 'assets/img/icons/lead_120.png',
                value:'Leads'
            },
            {
                id:4,
                image: 'assets/img/icons/account_120.png',
                value:'Accounts'
            },
            {
                id:5,
                image: 'assets/img/icons/contact_120.png',
                value:'Contacts'
            },
            {
                id:6,
                image: 'assets/img/icons/campaign_120.png',
                value:'Campaign'
            },
            {
                id:7,
                image: 'assets/img/icons/task_120.png',
                value:'Tasks'
            },
            {
                id:8,
                image: 'assets/img/icons/note_120.png',
                value:'Notes'
            },
            {
                id:9,
                image: 'assets/img/icons/event_120.png',
                value:'Calendar'
            },
            {
                id:10,
                image: 'assets/img/icons/dashboard_120.png',
                value:'Dashboards'
            },
            {
                id:11,
                image: 'assets/img/icons/report_120.png',
                value:'Reports'
            },
            {
                id:12,
                image: 'assets/img/icons/file_120.png',
                value:'Files'
            },
            {
                id:13,
                image: 'assets/img/icons/user_120.png',
                value:'People'
            },
            {
                id:14,
                image: 'assets/img/icons/case_120.png',
                value:'Cases'
            },
            {
                id:15,
                image: 'assets/img/icons/product_120.png',
                value:'Products'
            }];
            return _list;
            
        }
    };
})