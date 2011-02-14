
Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.Ajax.request({
            url: 'http://absolom.local:4567/stop/51217',
            method: 'GET',
            success: function(result, request) {
                console.log([result, requst])
            }
        });
    }
});

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