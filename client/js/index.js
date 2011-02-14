
Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.Ajax.request({
            url: 'http://absolom.local/stop/51217',
            method: 'GET',
            success: function(result, request) {
                console.log([result, requst])
            }
        });
    }
});

// geolocation
function init_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
    
        function(position) {
    
            // Did we get the position correctly?
            // alert (position.coords.latitude);
            // To see everything available in the position.coords array:
            // for (key in position.coords) {alert(key)}
            console.log([position.coords.latitude, position.coords.longitude]);
            
    
        },
        // next function is the error callback
        function(error) {
            switch (error.code) {
            case error.TIMEOUT:
                alert('Timeout');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Position unavailable');
                break;
            case error.PERMISSION_DENIED:
                alert('Permission denied');
                break;
            case error.UNKNOWN_ERROR:
                alert('Unknown error');
                break;
            }
        });
    }    
}



//Ext.setup({
//    icon: 'icon.png',
//    tabletStartupScreen: 'tablet_startup.png',
//    phoneStartupScreen: 'phone_startup.png',
//    glossOnIcon: false,
//    onReady: function() {
//        
//        var viewport = new Ext.Panel({
//            fullscreen: true,
//            dockedItems: [{
//                xtype: 'toolbar',
//                dock: 'top',
//                items: [
//                    //{
//                    //    xtype: 'field',
//                    //    xtype: 'textfield',
//                    //    name : 'name',
//                    //    placeHolder: 'Text',
//                    //    // label: 'Name',
//                    //    autoCapitalize : false
//                    //},
//                    //{
//                    //    xtype: 'searchfield',
//                    //    name : 'search',
//                    //    placeHolder: 'Search'
//                    //    // label: 'Search',
//                    //},
//                    //{
//                    //    xtype: 'selectfield',
//                    //    name: 'options',
//                    //    options: [
//                    //        {text: 'Option 1',  value: '1'},
//                    //        {text: 'Option 2', value: '2'}
//                    //    ]
//                    //}
//                ]
//            }],
//            items: new Ext.list.ListView({
//                store: [],
//                multiSelect: true,
//                emptyText: 'No images to display',
//                reserveScrollOffset: true,
//                columns: [{
//                    header: 'File',
//                    width: .5,
//                    dataIndex: 'name'
//                },{
//                    header: 'Last Modified',
//                    width: .35,
//                    dataIndex: 'lastmod',
//                    tpl: '{lastmod:date("m-d h:i a")}'
//                },{
//                    header: 'Size',
//                    dataIndex: 'size',
//                    tpl: '{size:fileSize}', // format using Ext.util.Format.fileSize()
//                    align: 'right'
//                }]
//            })
//        })
//    }
//});