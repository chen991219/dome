// 这里暴露出的是左侧菜单列表的资源
const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: "UI",
        key: '/home/ui',
        children: [
            {
                title: '按钮',
                key: '/home/ui/buttons'
            },
            {
                title: '弹框',
                key: '/home/ui/modals'
            },
            {
                title: 'Loading',
                key: '/home/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/home/ui/notification'
            },
            {
                title: '全局Message',
                key: '/home/ui/message'
            },
            {
                title: 'Tab标签',
                key: '/home/ui/tabs'
            },
        
            {
                title: '轮播图',
                key: '/home/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/home/form',
        children: [
            {
                title: '登录',
                key: '/home/form/login'
            },
            {
                title: '注册',
                key: '/home/form/reg'
            }
        ]
    },
   
    {
        title: '富文本',
        key: '/home/rich'
    },
    
    {
        title: '各种演示',
        key: '/home/rate'
    },
    {
        title: '上传图片',
        key: '/home/Upload'
    },
    {
        title: '城市管理',
        key: '/home/city'
    },
    {
        title: '车辆行驶轨迹地图',
        key: '/home/OMap'
    },
    {
        title: '图标',
        key: '/home/charts',
        children: [
            {
                title: '柱形图',
                key: '/home/charts/bar'
            },
            {
                title: '饼图',
                key: '/home/charts/pic'
            },
            {
                title: '折线图',
                key: '/home/table/line'
            }
        ]
    },
];
export default menuList;