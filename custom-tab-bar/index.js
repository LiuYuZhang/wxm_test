const app = getApp()
 
Component({
 
  data: {
    selected: 0,
    color: "#000000",
    roleId: '',
    selectedColor: "#1396DB",
    openid: '',
    list: [],
    allList: [{
      list1: [{
        pagePath: "/pages/home/home",
        text: "首页"
      }, {
        pagePath: "/pages/notice/notice",
        text: "返回首页"
      }],
 
      list2: [{
        pagePath: "/pages/home/home",
        text: "首页"
      }, {
        pagePath: "/pages/publish/publish",
        text: "发布"
      }]
    }],
  },
 
  attached() {
    let openid = app.globalData.openid
    if (openid !== 'orUNJ4x0onCasKAVhRD5jD2pql1A') {
      this.setData({
        list: this.data.allList[0].list1
      })
    } 
    else if (openid == 'orUNJ4x0onCasKAVhRD5jD2pql1A') {
      this.setData({
        list: this.data.allList[0].list2
      })
    } 
  },
 
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
