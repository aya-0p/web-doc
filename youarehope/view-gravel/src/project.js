window.__require = (function e(t, n, a) {
  function o(i, s) {
    if (!n[i]) {
      if (!t[i]) {
        var r = i.split("/");
        if (((r = r[r.length - 1]), !t[r])) {
          var l = "function" == typeof __require && __require;
          if (!s && l) return l(r, !0);
          if (c) return c(r, !0);
          throw new Error("Cannot find module '" + i + "'");
        }
      }
      var h = (n[i] = {
        exports: {},
      });
      t[i][0].call(
        h.exports,
        function (e) {
          return o(t[i][1][e] || e);
        },
        h,
        h.exports,
        e,
        t,
        n,
        a
      );
    }
    return n[i].exports;
  }
  for (
    var c = "function" == typeof __require && __require, i = 0;
    i < a.length;
    i++
  )
    o(a[i]);
  return o;
})(
  {
    ButtonSafe: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "7ce364rRoZNXpPs4TXpN2i8", "ButtonSafe"),
          cc.Class({
            extends: cc.Component,
            properties: {
              safeTime: {
                default: 0.5,
                tooltip:
                  "\ufffd\ufffd\u0165\ufffd\ufffd\ufffd\ufffd\u02b1\ufffd\u48ec\u05b8\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u05bb\ufffd\u0735\ufffd\ufffd\u04bb\ufffd\ufffd.",
              },
            },
            start: function () {
              var e = this,
                t = this.getComponent(cc.Button);
              t &&
                ((this.clickEvents = t.clickEvents),
                this.node.on(
                  "click",
                  function () {
                    (t.clickEvents = []),
                      e.scheduleOnce(function (n) {
                        t.clickEvents = e.clickEvents;
                      }, e.safeTime);
                    var n = t.enableAutoGrayEffect;
                    (t.enableAutoGrayEffect = !1),
                      (t.interactable = !1),
                      e.scheduleOnce(function (e) {
                        (t.enableAutoGrayEffect = n), (t.interactable = !0);
                      }, e.safeTime);
                  },
                  this
                ));
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    NewScript: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4a3e2UZtypJTrou3NyZCnkQ", "NewScript"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    "Z2+1": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "95acf7gdelBj7oyvoG0iriC", "Z2+1");
        var a = e("timer");
        cc.Class({
          extends: cc.Component,
          properties: {},
          on_touch_end: function (e) {},
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name.substr(0, 9) &&
              (a.t2 = a.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        timer: "timer",
      },
    ],
    altas_list: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "29ad4NXgt1NOYReAcoSUHCT", "altas_list");
        for (var a = new Array(5), o = 0; o < 5; o++) a[o] = new Array(15);
        (a[0][0] = 101),
          (a[0][1] = "ground1"),
          (a[0][2] = "ground2"),
          (a[0][3] = "ground3"),
          (a[0][4] = "ground4"),
          (a[0][5] = "ground5"),
          (a[0][6] = "ground6"),
          (a[0][7] = "ground7"),
          (a[0][8] = "itemA"),
          (a[0][9] = "itemB"),
          (t.exports = a),
          cc._RF.pop();
      },
      {},
    ],
    bridge_to_item: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6445duvrBJN67kNF5qmObIi", "bridge_to_item");
        var a = {
          target: function (e) {
            var t = e % 2,
              n = e % 3,
              a = e % 5,
              o = e % 7;
            return (
              console.log(),
              (e = 174),
              0 !== t && 0 !== n && 0 !== a && 0 !== o && (e = 174),
              0 == t && 0 !== n && 0 !== a && 0 !== o && (e = 175),
              0 !== t && 0 == n && 0 !== a && 0 !== o && (e = 176),
              0 !== t && 0 !== n && 0 == a && 0 !== o && (e = 177),
              0 !== t && 0 !== n && 0 !== a && 0 == o && (e = 178),
              0 == t && 0 !== n && 0 == a && 0 !== o && (e = 179),
              0 !== t && 0 == n && 0 !== a && 0 == o && (e = 180),
              0 == t && 0 == n && 0 !== a && 0 !== o && (e = 181),
              0 !== t && 0 == n && 0 == a && 0 !== o && (e = 182),
              0 !== t && 0 !== n && 0 == a && 0 == o && (e = 183),
              0 == t && 0 !== n && 0 !== a && 0 == o && (e = 184),
              0 == t && 0 == n && 0 == a && 0 !== o && (e = 185),
              0 !== t && 0 == n && 0 == a && 0 == o && (e = 186),
              0 == t && 0 !== n && 0 == a && 0 == o && (e = 187),
              0 == t && 0 == n && 0 !== a && 0 == o && (e = 188),
              0 == t && 0 == n && 0 == a && 0 == o && (e = 189),
              e
            );
          },
        };
        (t.exports = a), cc._RF.pop();
      },
      {},
    ],
    button_1: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9cbd18iCFhKOYiDKebt+rh+", "button_1");
        var a = e("item_state"),
          o = e("qCount"),
          c = e("current_list"),
          i = e("timer"),
          s = e("get_canvas");
        cc.Class({
          extends: cc.Component,
          properties: {
            queueList: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this.queueList.getChildByName("Q1-1").x,
              n = parseInt(this.node.name.substr(7, 1));
            a[0] = a[n];
            var i = s
              .target(this.node)
              .getChildByName("top_tools")
              .getChildByName("erase")
              .getChildByName("Background")
              .getComponent(cc.Sprite);
            cc.loader.loadRes("ui-erase", cc.SpriteFrame, function (e, t) {
              i.spriteFrame = t;
            });
            var r = o[n];
            if (c.open > 0) var l = o[c.open];
            var h = c.open;
            if ((console.log(r), t <= -1700)) {
              (c.open = n), console.log("current_list.open:" + c.open);
              for (var d = 1; d <= r; d++)
                switch (d) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (d - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (d - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (d - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.15);
                }
              for (d = 1; d <= l; d++)
                switch (d) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + h)
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                }
            } else if (-540 == t) {
              (c.open = 0),
                console.log("cancel"),
                console.log("current_list.open:" + c.open);
              for (d = r; d > 0; d--)
                switch (d) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (d - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                }
              c.open = 0;
            } else if (t <= -540 && t > -1700) {
              (c.open = 0),
                console.log("cancel"),
                console.log("current_list.open:" + c.open);
              for (d = r; d > 0; d--)
                switch (d) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.1 * (d - 1)),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-1").x = -1700),
                          (this.queueList.getChildByName("Q1-1").scale = 1),
                          (this.queueList.getChildByName("Q1-1").opacity = 255);
                      }, 0.1 * (d - 1) + 0.25);
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.1 * (d - 1)),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-2").x = -1700),
                          (this.queueList.getChildByName("Q1-2").scale = 1),
                          (this.queueList.getChildByName("Q1-2").opacity = 255);
                      }, 0.11 * (d - 1) + 0.25);
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.1 * (d - 1)),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-3").x = -1700),
                          (this.queueList.getChildByName("Q1-3").scale = 1),
                          (this.queueList.getChildByName("Q1-3").opacity = 255);
                      }, 0.1 * (d - 1) + 0.25);
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.25),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-4").x = -1700),
                          (this.queueList.getChildByName("Q1-4").scale = 1),
                          (this.queueList.getChildByName("Q1-4").opacity = 255);
                      }, 0.5);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.15),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-5").x = -1700),
                          (this.queueList.getChildByName("Q1-5").scale = 1),
                          (this.queueList.getChildByName("Q1-5").opacity = 255);
                      }, 0.4);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.05),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-6").x = -1700),
                          (this.queueList.getChildByName("Q1-6").scale = 1),
                          (this.queueList.getChildByName("Q1-6").opacity = 255);
                      }, 0.3);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.08),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-7").x = -1700),
                          (this.queueList.getChildByName("Q1-7").scale = 1),
                          (this.queueList.getChildByName("Q1-7").opacity = 255);
                      }, 0.33);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_middle");
                    }, 0.15),
                      this.scheduleOnce(function () {
                        (this.queueList.getChildByName("Q1-8").x = -1700),
                          (this.queueList.getChildByName("Q1-8").scale = 1),
                          (this.queueList.getChildByName("Q1-8").opacity = 255);
                      }, 0.4);
                }
              c.open = 0;
            }
            console.log(a[0]);
          },
          on_touch_cancel: function (e) {
            i.t2 = i.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        get_canvas: "get_canvas",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
      },
    ],
    button_2: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "555aeD+o41GM7ZSmzW/xtZV", "button_2");
        var a = e("item_state");
        cc.Class({
          extends: cc.Component,
          properties: {},
          on_touch_end: function (e) {
            var t = this.node.parent.parent.parent.getChildByName("Q1-1").x;
            -1570 == t
              ? (this.node.parent.parent.parent
                  .getChildByName("Q1-1")
                  .getComponent(cc.Animation)
                  .play("queueA1"),
                console.log(t),
                this.scheduleOnce(function () {
                  this.node.parent.parent.parent
                    .getChildByName("Q1-2")
                    .getComponent(cc.Animation)
                    .play("queueA1");
                }, 0.1))
              : (this.node.parent.parent.parent
                  .getChildByName("Q1-2")
                  .getComponent(cc.Animation)
                  .play("queueA1_back"),
                console.log(2),
                this.scheduleOnce(function () {
                  this.node.parent.parent.parent
                    .getChildByName("Q1-1")
                    .getComponent(cc.Animation)
                    .play("queueA1_back");
                }, 0.1)),
              (a[0] = a[2]),
              console.log(a[0]);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this);
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        item_state: "item_state",
      },
    ],
    button_queue: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3da29L65rNMoqwi4B+a8HrI", "button_queue");
        var a = e("item_state"),
          o = e("qCount"),
          c = e("current_list"),
          i = e("timer"),
          s = e("item_data"),
          r = e("altas_list"),
          l = e("tools_state"),
          h = e("get_canvas");
        cc.Class({
          extends: cc.Component,
          properties: {
            bottom: {
              default: null,
              type: cc.Node,
            },
            queueList: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            l.freeze = 0;
            var t = h
              .target(this.node)
              .getChildByName("top_tools")
              .getChildByName("freeze")
              .getChildByName("Background")
              .getComponent(cc.Sprite);
            cc.loader.loadRes("ui_freeze", cc.SpriteFrame, function (e, n) {
              t.spriteFrame = n;
            });
            var n = this.node
                .getChildByName("Background")
                .getComponent(cc.Sprite).spriteFrame.name,
              i = this.node.getChildByName("Background").width,
              d = this.node.getChildByName("Background").height;
            console.log("button:" + n);
            for (
              var u = this.node.parent.parent.parent.name.substr(1, 1),
                p = o[u],
                _ = 1;
              _ <= p;
              _++
            )
              switch (_) {
                case 1:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-1")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.1 * (_ - 1));
                  break;
                case 2:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-2")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.1 * (_ - 1));
                  break;
                case 3:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-3")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.1 * (_ - 1));
                  break;
                case 4:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-4")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.25);
                  break;
                case 5:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-5")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.15);
                  break;
                case 6:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-6")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.05);
                  break;
                case 7:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-7")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.08);
                  break;
                case 8:
                  this.scheduleOnce(function () {
                    this.queueList
                      .getChildByName("Q1-8")
                      .getComponent(cc.Animation)
                      .play("queueA1_back");
                  }, 0.15);
              }
            c.open = 0;
            var m = "button_" + u,
              g = this.bottom
                .getChildByName(m)
                .getChildByName("Background")
                .getComponent(cc.Sprite);
            (100 / i) * d <= 170
              ? ((this.bottom
                  .getChildByName(m)
                  .getChildByName("Background").height = (100 / i) * d),
                (this.bottom
                  .getChildByName(m)
                  .getChildByName("Background").width = 100))
              : ((this.bottom
                  .getChildByName(m)
                  .getChildByName("Background").height = 170),
                (this.bottom
                  .getChildByName(m)
                  .getChildByName("Background").width = (170 / d) * i)),
              console.log("button_number" + u);
            var C = r[0][s[n][4]].getSpriteFrame(n);
            (g.spriteFrame = C), (a[0] = n), (a[u] = n);
          },
          on_touch_cancel: function (e) {
            i.t2 = i.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        current_list: "current_list",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
        tools_state: "tools_state",
      },
    ],
    canvas_move: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "10068WqssRFwZLWRKMYBKlD", "canvas_move");
        var a = e("timer"),
          o = !1,
          c = e("tools_state");
        cc.Class({
          extends: cc.Component,
          properties: {},
          on_touch_move: function (e) {
            var t = e.getTouches();
            if (t.length >= 2) {
              var n = t[0],
                o = t[1],
                i = n.getLocation(),
                s = o.getLocation(),
                r = i.add(s).mul(0.5),
                l = i.sub(s).mag(),
                h = n.getPreviousLocation(),
                d = o.getPreviousLocation(),
                u = h.add(d).mul(0.5),
                p = h.sub(d).mag(),
                _ = r.sub(u),
                m = this.node.getChildByName("paper_zoom").position,
                g = this.node.convertToWorldSpaceAR(m),
                C = r.sub(g),
                y = this.node.getChildByName("paper_zoom").scale;
              y <= 1
                ? ((this.node.getChildByName("paper_zoom").x =
                    this.node.getChildByName("paper_zoom").x + C.x * y),
                  (this.node.getChildByName("paper_zoom").y =
                    this.node.getChildByName("paper_zoom").y + C.y * y),
                  (this.node
                    .getChildByName("paper_zoom")
                    .getChildByName("paper").x =
                    this.node
                      .getChildByName("paper_zoom")
                      .getChildByName("paper").x - C.x),
                  (this.node
                    .getChildByName("paper_zoom")
                    .getChildByName("paper").y =
                    this.node
                      .getChildByName("paper_zoom")
                      .getChildByName("paper").y - C.y))
                : ((this.node.getChildByName("paper_zoom").x =
                    this.node.getChildByName("paper_zoom").x + C.x),
                  (this.node.getChildByName("paper_zoom").y =
                    this.node.getChildByName("paper_zoom").y + C.y),
                  (this.node
                    .getChildByName("paper_zoom")
                    .getChildByName("paper").x =
                    this.node
                      .getChildByName("paper_zoom")
                      .getChildByName("paper").x -
                    C.x / y),
                  (this.node
                    .getChildByName("paper_zoom")
                    .getChildByName("paper").y =
                    this.node
                      .getChildByName("paper_zoom")
                      .getChildByName("paper").y -
                    C.y / y));
              var f = this.node.getChildByName("paper_zoom").scale;
              (this.node
                .getChildByName("paper_zoom")
                .getChildByName("paper").x =
                this.node.getChildByName("paper_zoom").getChildByName("paper")
                  .x +
                _.x / 1),
                (this.node
                  .getChildByName("paper_zoom")
                  .getChildByName("paper").y =
                  this.node.getChildByName("paper_zoom").getChildByName("paper")
                    .y +
                  _.y / 1),
                0 == c.scale &&
                  ((this.node.getChildByName("paper_zoom").scale = (f * l) / p),
                  (this.node
                    .getChildByName("Tx1")
                    .getComponent(cc.Label).string = a.t1)),
                this.scheduleOnce(function () {}, 2);
            }
          },
          on_touch_end: function (e) {
            2 == a.t2
              ? this.scheduleOnce(function () {
                  (a.t2 = a.t2 - 1),
                    (this.node
                      .getChildByName("Tx2")
                      .getComponent(cc.Label).string = "t2:" + a.t2);
                }, 0.2)
              : ((a.t2 = a.t2 - 1),
                (this.node.getChildByName("Tx2").getComponent(cc.Label).string =
                  "t2:" + a.t2));
          },
          on_touch_start: function (e) {
            (a.t2 = a.t2 + 1),
              (this.node.getChildByName("Tx2").getComponent(cc.Label).string =
                "t2:" + a.t2);
          },
          on_touch_cancel: function (e) {
            2 == a.t2
              ? this.scheduleOnce(function () {
                  a.t2 = a.t2 - 1;
                }, 0.2)
              : (a.t2 = a.t2 - 1);
          },
          on_mouse_down: function (e) {
            e.getButton() === cc.Event.EventMouse.BUTTON_MIDDLE && (o = !0);
          },
          on_mouse_up: function (e) {
            e.getButton() === cc.Event.EventMouse.BUTTON_MIDDLE && (o = !1);
          },
          on_mouse_move: function (e) {
            e.getButton();
            if (1 == o) {
              e.getLocation();
              var t = e.getDelta();
              console.log(t),
                (this.node
                  .getChildByName("paper_zoom")
                  .getChildByName("paper").x =
                  this.node.getChildByName("paper_zoom").getChildByName("paper")
                    .x +
                  t.x / 1),
                (this.node
                  .getChildByName("paper_zoom")
                  .getChildByName("paper").y =
                  this.node.getChildByName("paper_zoom").getChildByName("paper")
                    .y +
                  t.y / 1);
            }
          },
          onLoad: function () {
            this.node.on(
              cc.Node.EventType.TOUCH_MOVE,
              this.on_touch_move,
              this
            ),
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
              this.node.on(
                cc.Node.EventType.TOUCH_START,
                this.on_touch_start,
                this
              ),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              ),
              this.node.on(
                cc.Node.EventType.MOUSE_DOWN,
                this.on_mouse_down,
                this
              ),
              this.node.on(cc.Node.EventType.MOUSE_UP, this.on_mouse_up, this),
              this.node.on(
                cc.Node.EventType.MOUSE_MOVE,
                this.on_mouse_move,
                this
              ),
              (this.node.getChildByName("Tx2").getComponent(cc.Label).string =
                "t2:" + a.t2),
              (this.node.getChildByName("Tx3").getComponent(cc.Label).string =
                "t1:" + a.t1);
          },
          start: function () {},
          update: function (e) {
            (this.node.getChildByName("Tx2").getComponent(cc.Label).string =
              "STATUS-0" + a.t2),
              (this.node
                .getChildByName("top_tools")
                .getChildByName("scale")
                .getChildByName("Background")
                .getChildByName("Label")
                .getComponent(cc.Label).string =
                "Scale:\n" +
                parseInt(100 * this.node.getChildByName("paper_zoom").scale) +
                "%");
          },
        }),
          cc._RF.pop();
      },
      {
        timer: "timer",
        tools_state: "tools_state",
      },
    ],
    change_bridge: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "94b63YgycNHU44mipzKgRZa", "change_bridge");
        var a = e("paper_state"),
          o = e("bridge_to_item"),
          c = (e("model_change_pic"), e("model_change_name"), e("item_data")),
          i = e("altas_list"),
          s = {
            location: function (e, t, n, s) {
              for (var r = new Array(8), l = 0; l < 8; l++) r[l] = new Array(2);
              if (
                ((r[0][0] = 1),
                (r[0][1] = 0),
                (r[0][2] = 5),
                (r[1][0] = 0),
                (r[1][1] = -1),
                (r[1][2] = 7),
                (r[2][0] = -1),
                (r[2][1] = 0),
                (r[2][2] = 2),
                (r[3][0] = 0),
                (r[3][1] = 1),
                (r[3][2] = 3),
                s)
              ) {
                for (var h = 0; h < 4; h++)
                  if (
                    a[e + r[h][0]][t + r[h][1]][2] &&
                    a[e + r[h][0]][t + r[h][1]][5]
                  ) {
                    var d = a[e + r[h][0]][t + r[h][1]][2],
                      u = d.substr(d.length - 3, 3);
                    if (u >= 174 && u <= 189) {
                      console.log(
                        "cc.isValid(parent.getChildByName(paper_state[x+list[j][0]][y+list[j][1]][2]" +
                          cc.isValid(
                            n.getChildByName(a[e + r[h][0]][t + r[h][1]][2]),
                            !0
                          )
                      );
                      var p = (1 * a[e + r[h][0]][t + r[h][1]][5]) / r[h][2];
                      a[e + r[h][0]][t + r[h][1]][5] = p;
                      var _ = o.target(p);
                      console.log(
                        "[x+list[j][0]][y+list[j][1]" +
                          (e + r[h][0]) +
                          "-----" +
                          (t + r[h][1])
                      );
                      var m = i[0][c[_][4]].getSpriteFrame(_);
                      n
                        .getChildByName(a[e + r[h][0]][t + r[h][1]][2])
                        .getComponent(cc.Sprite).spriteFrame = m;
                      var g = d;
                      (g = g.substr(0, g.length - 3) + _),
                        (n.getChildByName(a[e + r[h][0]][t + r[h][1]][2]).name =
                          g),
                        (a[e + r[h][0]][t + r[h][1]][2] = g);
                    }
                  }
              } else
                for (var C = 0; C < 4; C++)
                  if (a[e + r[C][0]][t + r[C][1]][2]) {
                    var y = a[e + r[C][0]][t + r[C][1]][2],
                      f = y.substr(y.length - 3, 3);
                    if (f >= 174 && f <= 189) {
                      var v = a[e + r[C][0]][t + r[C][1]][5] * r[C][2];
                      a[e + r[C][0]][t + r[C][1]][5] = v;
                      var N = o.target(v),
                        b = i[0][c[N][4]].getSpriteFrame(N);
                      n
                        .getChildByName(a[e + r[C][0]][t + r[C][1]][2])
                        .getComponent(cc.Sprite).spriteFrame = b;
                      var B = y;
                      (B = B.substr(0, B.length - 3) + N),
                        (n.getChildByName(a[e + r[C][0]][t + r[C][1]][2]).name =
                          B),
                        (a[e + r[C][0]][t + r[C][1]][2] = B);
                    }
                  }
            },
          };
        (t.exports = s), cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        bridge_to_item: "bridge_to_item",
        item_data: "item_data",
        model_change_name: "model_change_name",
        model_change_pic: "model_change_pic",
        paper_state: "paper_state",
      },
    ],
    change_storage_key: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "7df4eM2aB1Fx4+91LIMyP4p", "change_storage_key");
        var a = {
          data: function (e, t) {
            var n = JSON.parse(cc.sys.localStorage.getItem(e));
            cc.sys.localStorage.removeItem(e),
              cc.sys.localStorage.setItem(t, JSON.stringify(n));
          },
        };
        (t.exports = a), cc._RF.pop();
      },
      {},
    ],
    change_sub_bridge: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "32478T9aiFM+I3GiI+t3eSD", "change_sub_bridge");
        var a = e("paper_state"),
          o = e("bridge_to_item"),
          c = (e("model_change_pic"), e("model_change_name"), e("item_data")),
          i = e("altas_list"),
          s = {
            location: function (e, t, n, s, r) {
              if (166 == n || 167 == n)
                var l = e - 1,
                  h = t,
                  d = 2;
              if (168 == n || 169 == n) (l = e), (h = t + 1), (d = 3);
              if (170 == n || 171 == n) (l = e + 1), (h = t), (d = 5);
              if (172 == n || 173 == n) (l = e), (h = t - 1), (d = 7);
              if (r) {
                if (a[l][h][2] && a[l][h][5]) {
                  var u = a[l][h][2],
                    p = u.substr(u.length - 3, 3);
                  if (p >= 174 && p <= 189) {
                    console.log(
                      "cc.isValid(parent.getChildByName(paper_state[point_x][point_y][1]" +
                        cc.isValid(s.getChildByName(a[l][h][2]), !0)
                    );
                    var _ = (1 * a[l][h][5]) / d;
                    a[l][h][5] = _;
                    var m = o.target(_),
                      g = i[0][c[m][4]].getSpriteFrame(m);
                    s
                      .getChildByName(a[l][h][2])
                      .getComponent(cc.Sprite).spriteFrame = g;
                    var C = u;
                    console.log("@@@@@@@@@@@@@@@" + C),
                      (C = C.substr(0, C.length - 3) + m),
                      console.log("@@@@@@@@@@@@@@@" + C),
                      (s.getChildByName(a[l][h][2]).name = C),
                      (a[l][h][2] = C);
                  }
                }
              } else if (a[l][h][2]) {
                var y = a[l][h][2],
                  f = y.substr(y.length - 3, 3);
                if (f >= 174 && f <= 189) {
                  var v = a[l][h][5] * d;
                  a[l][h][5] = v;
                  var N = o.target(v),
                    b = i[0][c[N][4]].getSpriteFrame(N);
                  s
                    .getChildByName(a[l][h][2])
                    .getComponent(cc.Sprite).spriteFrame = b;
                  var B = y;
                  (B = B.substr(0, B.length - 3) + N),
                    (s.getChildByName(a[l][h][2]).name = B),
                    (a[l][h][2] = B);
                }
              }
            },
          };
        (t.exports = s), cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        bridge_to_item: "bridge_to_item",
        item_data: "item_data",
        model_change_name: "model_change_name",
        model_change_pic: "model_change_pic",
        paper_state: "paper_state",
      },
    ],
    change_water_name: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e8704BpstJM1LVUkA6gEOmj", "change_water_name");
        var a = e("paper_state"),
          o = e("water_to_item"),
          c = (e("model_change_pic"), e("model_change_name")),
          i = {
            location: function (e, t, n) {
              for (var i = new Array(8), s = 0; s < 8; s++) i[s] = new Array(2);
              (i[0][0] = 1),
                (i[0][1] = 0),
                (i[0][2] = 5),
                (i[1][0] = 0),
                (i[1][1] = -1),
                (i[1][2] = 7),
                (i[2][0] = -1),
                (i[2][1] = 0),
                (i[2][2] = 2),
                (i[3][0] = 0),
                (i[3][1] = 1),
                (i[3][2] = 3),
                (i[4][0] = 1),
                (i[4][1] = -1),
                (i[4][2] = 17),
                (i[5][0] = -1),
                (i[5][1] = -1),
                (i[5][2] = 19),
                (i[6][0] = -1),
                (i[6][1] = 1),
                (i[6][2] = 11),
                (i[7][0] = 1),
                (i[7][1] = 1),
                (i[7][2] = 13);
              for (s = 0; s < 8; s++)
                if (
                  (console.log(a[e + i[s][0]][t + i[s][1]][1]),
                  a[e + i[s][0]][t + i[s][1]][1])
                ) {
                  var r = a[e + i[s][0]][t + i[s][1]][1],
                    l =
                      (r.substr(r.length - 3, 3),
                      a[e + i[s][0]][t + i[s][1]][4]),
                    h = o.target(l);
                  c.data(e + i[s][0], t + i[s][1], n, h, r);
                }
            },
          };
        (t.exports = i), cc._RF.pop();
      },
      {
        model_change_name: "model_change_name",
        model_change_pic: "model_change_pic",
        paper_state: "paper_state",
        water_to_item: "water_to_item",
      },
    ],
    change_water: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "96477J00yhGQIJBc6sirlHF", "change_water");
        var a = e("paper_state"),
          o = e("water_to_item"),
          c = (e("model_change_pic"), e("model_change_name"), e("item_data")),
          i = e("altas_list"),
          s = {
            location: function (e, t, n, s) {
              for (var r = new Array(8), l = 0; l < 8; l++) r[l] = new Array(2);
              if (
                ((r[0][0] = 1),
                (r[0][1] = 0),
                (r[0][2] = 5),
                (r[1][0] = 0),
                (r[1][1] = -1),
                (r[1][2] = 7),
                (r[2][0] = -1),
                (r[2][1] = 0),
                (r[2][2] = 2),
                (r[3][0] = 0),
                (r[3][1] = 1),
                (r[3][2] = 3),
                (r[4][0] = 1),
                (r[4][1] = -1),
                (r[4][2] = 17),
                (r[5][0] = -1),
                (r[5][1] = -1),
                (r[5][2] = 19),
                (r[6][0] = -1),
                (r[6][1] = 1),
                (r[6][2] = 11),
                (r[7][0] = 1),
                (r[7][1] = 1),
                (r[7][2] = 13),
                s)
              ) {
                for (var h = 0; h < 8; h++)
                  if (
                    a[e + r[h][0]][t + r[h][1]][1] &&
                    a[e + r[h][0]][t + r[h][1]][4]
                  ) {
                    var d = a[e + r[h][0]][t + r[h][1]][1],
                      u = d.substr(d.length - 3, 3);
                    if (u >= 118 && u <= 164) {
                      console.log(
                        "cc.isValid(parent.getChildByName(paper_state[x+list[j][0]][y+list[j][1]][1]" +
                          cc.isValid(
                            n.getChildByName(a[e + r[h][0]][t + r[h][1]][1]),
                            !0
                          )
                      );
                      var p = (1 * a[e + r[h][0]][t + r[h][1]][4]) / r[h][2];
                      a[e + r[h][0]][t + r[h][1]][4] = p;
                      var _ = o.target(p),
                        m = i[0][c[_][4]].getSpriteFrame(_);
                      n
                        .getChildByName(a[e + r[h][0]][t + r[h][1]][1])
                        .getComponent(cc.Sprite).spriteFrame = m;
                      var g = d;
                      console.log("@@@@@@@@@@@@@@@" + g),
                        (g = g.substr(0, g.length - 3) + _),
                        console.log("@@@@@@@@@@@@@@@" + g),
                        (n.getChildByName(a[e + r[h][0]][t + r[h][1]][1]).name =
                          g),
                        (a[e + r[h][0]][t + r[h][1]][1] = g);
                    }
                  }
              } else
                for (var C = 0; C < 8; C++)
                  if (
                    e + r[C][0] >= 0 &&
                    t + r[C][1] >= 0 &&
                    a[e + r[C][0]][t + r[C][1]][1]
                  ) {
                    var y = a[e + r[C][0]][t + r[C][1]][1],
                      f = y.substr(y.length - 3, 3);
                    if (f >= 118 && f <= 164) {
                      var v = a[e + r[C][0]][t + r[C][1]][4] * r[C][2];
                      a[e + r[C][0]][t + r[C][1]][4] = v;
                      var N = o.target(v),
                        b = i[0][c[N][4]].getSpriteFrame(N);
                      n
                        .getChildByName(a[e + r[C][0]][t + r[C][1]][1])
                        .getComponent(cc.Sprite).spriteFrame = b;
                      var B = y;
                      console.log("@@@@@@@@@@@@@@@" + B),
                        (B = B.substr(0, B.length - 3) + N),
                        console.log("@@@@@@@@@@@@@@@" + B),
                        (n.getChildByName(a[e + r[C][0]][t + r[C][1]][1]).name =
                          B),
                        (a[e + r[C][0]][t + r[C][1]][1] = B);
                    }
                  }
            },
          };
        (t.exports = s), cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        item_data: "item_data",
        model_change_name: "model_change_name",
        model_change_pic: "model_change_pic",
        paper_state: "paper_state",
        water_to_item: "water_to_item",
      },
    ],
    close_open: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ef761Eym1xLZ7F0RJXfHkCt", "close_open"),
          cc.Class({
            extends: cc.Component,
            properties: {
              open1: {
                default: null,
                type: cc.Node,
              },
              open2: {
                default: null,
                type: cc.Node,
              },
              open3: {
                default: null,
                type: cc.Node,
              },
              close1: {
                default: null,
                type: cc.Node,
              },
              close2: {
                default: null,
                type: cc.Node,
              },
              close3: {
                default: null,
                type: cc.Node,
              },
            },
            on_touch_end: function (e) {
              this.open1 && (this.open1.active = !0),
                this.open2 && (this.open2.active = !0),
                this.open3 && (this.open3.active = !0),
                this.close1 && (this.close1.active = !1),
                this.close2 && (this.close2.active = !1),
                this.close3 && (this.close3.active = !1);
            },
            on_touch_cancel: function (e) {},
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.on_touch_cancel,
                  this
                );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    create_document_list: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6bc27Hvc3xEb7pGXpuH+L2Y", "create_document_list");
        cc._RF.pop();
      },
      {},
    ],
    create_pic: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "adde6OUaylGRZc8xufWewQ1", "create_pic");
        var a = e("model_photo");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
          },
          creat: function () {
            console.log("123123"),
              a.data(this.target, void 0),
              console.log("123123");
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        model_photo: "model_photo",
      },
    ],
    current_list: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "aa291TKPX9Fkqm8UYI/tuyY", "current_list"),
          (t.exports = {
            open: 0,
            touch: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    delete_all: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b2a0eebOZ9IM4mzVZ0f15s9", "delete_all");
        var a = e("paper_state"),
          o = {
            location: function (e, t, n) {
              for (var o = 1; o < 4; o++)
                a[e][t][o] &&
                  (n.getChildByName(a[e][t][o]).destroy(),
                  (a[e][t][o] = void 0));
              a[e][t][4] = void 0;
            },
          };
        (t.exports = o), cc._RF.pop();
      },
      {
        paper_state: "paper_state",
      },
    ],
    delete_earth: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0ea7cWOT/9N249mB/zEnABo", "delete_earth");
        var a = e("paper_state"),
          o = {
            location: function (e, t, n) {
              a[e][t][0] &&
                (n.getChildByName(a[e][t][0]).destroy(), (a[e][t][0] = void 0));
            },
          };
        (t.exports = o), cc._RF.pop();
      },
      {
        paper_state: "paper_state",
      },
    ],
    document_data: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "323aePVcJlMfYSFnNyKVyz0", "document_data"),
          (t.exports = {
            name: "newfile20191012",
            touch: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    drawing_insert: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6b0f6GpmOlEmIvBnwcCHUQu", "drawing_insert");
        var a = e("new_size"),
          o = e("timer"),
          c = e("item_data"),
          i = e("item_state"),
          s = e("paper_state"),
          r = e("touch_lock"),
          l = e("delete_all"),
          h = e("get_water_envir"),
          d = e("change_water"),
          u = e("water_to_item"),
          p = e("get_bridge_envir"),
          _ = e("bridge_to_item"),
          m = e("change_bridge"),
          g = e("change_sub_bridge"),
          C = e("altas_list"),
          y = e("tools_state"),
          f = cc.v2(0, 0),
          v = !1,
          N = new Array(500),
          b = 0,
          B = new Array(500),
          w = 0,
          O = new Array(500),
          x = 0,
          A = new Array(500),
          F = new Array(500),
          L = 0;
        cc.Class({
          extends: cc.Component,
          properties: {
            ground1: {
              default: null,
              type: cc.SpriteAtlas,
            },
          },
          on_touch_move: function (e) {
            if (1 == e.getTouches().length && 0 == y.freeze) {
              var t = e.getLocation(),
                n = e.getStartLocation();
              if (0 == n.fuzzyEquals(f, 0.5)) {
                console.log("gooooooooooooood"),
                  (v = !0),
                  (f = n),
                  (r.erase = "x-y"),
                  (b = 0),
                  (w = 0),
                  (x = 0),
                  (L = 0);
                for (var R = 0; R < 500; R++)
                  (N[R] = new Array(2)),
                    (B[R] = new Array(2)),
                    (O[R] = new Array(2)),
                    (F[R] = new Array(2));
              }
              var k = t.sub(n).mag(),
                S = this.node.convertToNodeSpace(t);
              this.node.parent.parent
                .getChildByName("Tx2")
                .getComponent(cc.Label).string = "t2:" + o.t2;
              var q = Math.floor(S.x / 100),
                T = Math.floor(S.y / 100);
              if (
                ((F[L][0] = q),
                (F[L][1] = T),
                (L += 1),
                q >= 0 &&
                  T >= 0 &&
                  q < a.w &&
                  T < a.h &&
                  2 !== o.t2 &&
                  k > 50 &&
                  1 == v)
              ) {
                for (var E = 0; E < L; E++) {
                  console.log("locationList" + F);
                  (q = F[E][0]), (T = F[E][1]);
                  if (0 !== i[0]) {
                    var Q = new cc.Node("new sprite"),
                      I = Q.addComponent(cc.Sprite),
                      z = i[0],
                      U = c[z][0];
                    if (
                      (118 == z && (z = u.target(h.target(q, T))),
                      174 == z && (z = _.target(p.target(q, T))),
                      z >= 749 &&
                        z <= 979 &&
                        (z = parseInt(z) + Math.floor(32 * Math.random()) + 1),
                      (Q.x = 100 * q + 50 - this.node.width / 2 + c[z][2]),
                      (Q.y = 100 * T + 50 - this.node.height / 2 + c[z][3]),
                      (Q.zIndex = 1e4 * U - (99 - q + 100 * T) - 1),
                      (Q.name =
                        ("000" + q).substr(-3) +
                        ("000" + T).substr(-3) +
                        U +
                        z),
                      s[q][T][U] !== Q.name)
                    ) {
                      if (
                        (s[q][T][U] &&
                          (this.node.getChildByName(s[q][T][U]).destroy(),
                          console.log("destroy()"),
                          s[q][T][U].substr(7, 3) >= 118 &&
                            s[q][T][U].substr(7, 3) <= 164 &&
                            ((N[b][0] = q), (N[b][1] = T), (b += 1)),
                          s[q][T][U].substr(7, 3) >= 174 &&
                            s[q][T][U].substr(7, 3) <= 189 &&
                            ((B[w][0] = q), (B[w][1] = T), (w += 1)),
                          s[q][T][U].substr(7, 3) >= 166 &&
                            s[q][T][U].substr(7, 3) <= 173 &&
                            ((O[x][0] = q),
                            (O[x][1] = T),
                            (A[x] = s[q][T][U].substr(7, 3)),
                            (x += 1))),
                        s[q][T][3] && parseInt(z) < 749)
                      ) {
                        var H = s[q][T][3].substr(7, 3);
                        (V = H >= 222 && H <= 224),
                          (W = H >= 301 && H <= 362),
                          (j = H >= 413 && H <= 416),
                          (K =
                            411 == H ||
                            252 == H ||
                            409 == H ||
                            410 == H ||
                            366 == H ||
                            420 == H),
                          (X = H >= 551 && H <= 567),
                          (V || W || j || K || X) &&
                            l.location(q, T, this.node);
                      }
                      (V = parseInt(z) >= 222 && parseInt(z) <= 224),
                        (W = parseInt(z) >= 301 && parseInt(z) <= 362),
                        (j = parseInt(z) >= 413 && parseInt(z) <= 416),
                        (K =
                          411 == parseInt(z) ||
                          252 == parseInt(z) ||
                          409 == parseInt(z) ||
                          410 == parseInt(z) ||
                          366 == parseInt(z) ||
                          420 == parseInt(z)),
                        (X = parseInt(z) >= 551 && parseInt(z) <= 567),
                        (V || W || j || K || X) &&
                          (s[q][T][1] &&
                            (s[q][T][1].substr(7, 3) >= 118 &&
                              s[q][T][1].substr(7, 3) <= 164 &&
                              ((N[b][0] = q), (N[b][1] = T), (b += 1)),
                            s[q][T][1].substr(7, 3) >= 174 &&
                              s[q][T][1].substr(7, 3) <= 189 &&
                              ((B[w][0] = q), (B[w][1] = T), (w += 1)),
                            s[q][T][1].substr(7, 3) >= 166 &&
                              s[q][T][1].substr(7, 3) <= 173 &&
                              ((O[x][0] = q),
                              (O[x][1] = T),
                              (A[x] = s[q][T][1].substr(7, 3)),
                              (x += 1))),
                          l.location(q, T, this.node)),
                        (s[q][T][U] = Q.name),
                        z >= 118 &&
                          z <= 164 &&
                          ((s[q][T][4] = h.target(q, T)),
                          d.location(q, T, this.node)),
                        z >= 174 &&
                          z <= 189 &&
                          ((s[q][T][5] = p.target(q, T)),
                          m.location(q, T, this.node)),
                        z >= 166 && z <= 173 && g.location(q, T, z, this.node),
                        (I.trim = !1),
                        (I.sizeMode = cc.Sprite.SizeMode.RAW),
                        (Q.parent = this.node);
                      var J = C[0][c[z][4]].getSpriteFrame(z);
                      (I.spriteFrame = J), (Q.scale = c[z][1]);
                    }
                  } else {
                    console.log("=0 start");
                    for (var D = !0, M = 3; M > 0; M--) {
                      if (s[q][T][M] && D && v)
                        (z = s[q][T][M].substr(7, 3)) >= 118 && z <= 164
                          ? ((s[q][T][4] = void 0),
                            this.node.getChildByName(s[q][T][M]).destroy(),
                            (s[q][T][M] = void 0),
                            (N[b][0] = q),
                            (N[b][1] = T),
                            (b += 1))
                          : z >= 174 && z <= 189
                          ? ((s[q][T][5] = void 0),
                            this.node.getChildByName(s[q][T][M]).destroy(),
                            (s[q][T][M] = void 0),
                            (B[w][0] = q),
                            (B[w][1] = T),
                            (w += 1))
                          : z >= 166 && z <= 173
                          ? ((s[q][T][5] = void 0),
                            this.node.getChildByName(s[q][T][M]).destroy(),
                            (s[q][T][M] = void 0),
                            (O[x][0] = q),
                            (O[x][1] = T),
                            (A[x] = z),
                            (x += 1))
                          : (this.node.getChildByName(s[q][T][M]).destroy(),
                            (s[q][T][M] = void 0)),
                          (D = !1),
                          (r.erase = q + "-" + T);
                    }
                  }
                }
                v = !1;
              }
              S = this.node.convertToNodeSpace(t);
              this.node.parent.parent
                .getChildByName("Tx2")
                .getComponent(cc.Label).string = "t2:" + o.t2;
              (q = Math.floor(S.x / 100)), (T = Math.floor(S.y / 100));
              if (
                q >= 0 &&
                T >= 0 &&
                q < a.w &&
                T < a.h &&
                2 !== o.t2 &&
                k > 50 &&
                0 == v
              )
                if ((console.log("=more0000  start"), 0 !== i[0])) {
                  var P = new cc.Node("new sprite"),
                    Z = P.addComponent(cc.Sprite);
                  (z = i[0]), (U = c[z][0]);
                  if (
                    (118 == z && (z = u.target(h.target(q, T))),
                    174 == z && (z = _.target(p.target(q, T))),
                    z >= 749 &&
                      z <= 979 &&
                      (z = parseInt(z) + Math.floor(32 * Math.random()) + 1),
                    (P.x = 100 * q + 50 - this.node.width / 2 + c[z][2]),
                    (P.y = 100 * T + 50 - this.node.height / 2 + c[z][3]),
                    (P.zIndex = 1e4 * U - (99 - q + 100 * T) - 1),
                    (P.name =
                      ("000" + q).substr(-3) + ("000" + T).substr(-3) + U + z),
                    s[q][T][U] !== P.name)
                  ) {
                    if (
                      (s[q][T][U] &&
                        (this.node.getChildByName(s[q][T][U]).destroy(),
                        console.log("destroy()"),
                        s[q][T][U].substr(7, 3) >= 118 &&
                          s[q][T][U].substr(7, 3) <= 164 &&
                          ((N[b][0] = q), (N[b][1] = T), (b += 1)),
                        s[q][T][U].substr(7, 3) >= 174 &&
                          s[q][T][U].substr(7, 3) <= 189 &&
                          ((B[w][0] = q), (B[w][1] = T), (w += 1)),
                        s[q][T][U].substr(7, 3) >= 166 &&
                          s[q][T][U].substr(7, 3) <= 173 &&
                          ((O[x][0] = q),
                          (O[x][1] = T),
                          (A[x] = s[q][T][U].substr(7, 3)),
                          (x += 1))),
                      s[q][T][3] && parseInt(z) < 749)
                    ) {
                      var G = s[q][T][3].substr(7, 3);
                      (V = G >= 222 && G <= 224),
                        (W = G >= 301 && G <= 362),
                        (j = G >= 413 && G <= 416),
                        (K =
                          411 == G ||
                          252 == G ||
                          409 == G ||
                          410 == G ||
                          366 == G ||
                          420 == G),
                        (X = G >= 551 && G <= 567),
                        (V || W || j || K || X) && l.location(q, T, this.node);
                    }
                    var V, W, j, K, X;
                    (V = parseInt(z) >= 222 && parseInt(z) <= 224),
                      (W = parseInt(z) >= 301 && parseInt(z) <= 362),
                      (j = parseInt(z) >= 413 && parseInt(z) <= 416),
                      (K =
                        411 == parseInt(z) ||
                        252 == parseInt(z) ||
                        409 == parseInt(z) ||
                        410 == parseInt(z) ||
                        366 == parseInt(z) ||
                        420 == parseInt(z)),
                      (X = parseInt(z) >= 551 && parseInt(z) <= 567),
                      (V || W || j || K || X) &&
                        (s[q][T][1] &&
                          (s[q][T][1].substr(7, 3) >= 118 &&
                            s[q][T][1].substr(7, 3) <= 164 &&
                            ((N[b][0] = q), (N[b][1] = T), (b += 1)),
                          s[q][T][1].substr(7, 3) >= 174 &&
                            s[q][T][1].substr(7, 3) <= 189 &&
                            ((B[w][0] = q), (B[w][1] = T), (w += 1)),
                          s[q][T][1].substr(7, 3) >= 166 &&
                            s[q][T][1].substr(7, 3) <= 173 &&
                            ((O[x][0] = q),
                            (O[x][1] = T),
                            (A[x] = s[q][T][1].substr(7, 3)),
                            (x += 1))),
                        l.location(q, T, this.node)),
                      (s[q][T][U] = P.name),
                      z >= 118 &&
                        z <= 164 &&
                        ((s[q][T][4] = h.target(q, T)),
                        d.location(q, T, this.node)),
                      z >= 174 &&
                        z <= 189 &&
                        ((s[q][T][5] = p.target(q, T)),
                        m.location(q, T, this.node)),
                      z >= 166 && z <= 173 && g.location(q, T, z, this.node),
                      (Z.trim = !1),
                      (Z.sizeMode = cc.Sprite.SizeMode.RAW),
                      (P.parent = this.node);
                    var Y = C[0][c[z][4]].getSpriteFrame(z);
                    (Z.spriteFrame = Y),
                      (P.scale = c[z][1]),
                      console.log(P.name),
                      console.log(P.zIndex);
                  }
                } else {
                  console.log("=more0  start");
                  D = !0;
                  var $ = q + "-" + T;
                  console.log(r.erase), console.log($);
                  for (var ee = 3; ee > 0; ee--) {
                    if (s[q][T][ee] && D && $ !== r.erase)
                      (z = s[q][T][ee].substr(7, 3)) >= 118 && z <= 164
                        ? ((s[q][T][4] = void 0),
                          this.node.getChildByName(s[q][T][ee]).destroy(),
                          (s[q][T][ee] = void 0),
                          (N[b][0] = q),
                          (N[b][1] = T),
                          (b += 1))
                        : z >= 174 && z <= 189
                        ? ((s[q][T][5] = void 0),
                          this.node.getChildByName(s[q][T][ee]).destroy(),
                          (s[q][T][ee] = void 0),
                          (B[w][0] = q),
                          (B[w][1] = T),
                          (w += 1))
                        : z >= 166 && z <= 173
                        ? ((s[q][T][5] = void 0),
                          this.node.getChildByName(s[q][T][ee]).destroy(),
                          (s[q][T][ee] = void 0),
                          (O[x][0] = q),
                          (O[x][1] = T),
                          (A[x] = z),
                          (x += 1))
                        : (this.node.getChildByName(s[q][T][ee]).destroy(),
                          (s[q][T][ee] = void 0)),
                        (D = !1),
                        (r.erase = q + "-" + T);
                  }
                }
            }
          },
          on_touch_end: function (e) {
            if (1 == e.getTouches().length && 0 == y.freeze) {
              var t = e.getLocation(),
                n = this.node.convertToNodeSpace(t),
                f = Math.floor(n.x / 100),
                v = Math.floor(n.y / 100);
              if (f >= 0 && v >= 0 && f < a.w && v < a.h && 2 !== o.t2)
                if ((console.log("=more0000  start"), 0 !== i[0])) {
                  var F = new cc.Node("new sprite"),
                    L = F.addComponent(cc.Sprite);
                  118 == (J = i[0]) && (J = u.target(h.target(f, v))),
                    174 == J && (J = _.target(p.target(f, v))),
                    J >= 749 &&
                      J <= 979 &&
                      (J = parseInt(J) + Math.floor(32 * Math.random()) + 1);
                  var R = c[J][0];
                  if (
                    ((F.x = 100 * f + 50 - this.node.width / 2 + c[J][2]),
                    (F.y = 100 * v + 50 - this.node.height / 2 + c[J][3]),
                    (F.zIndex = 1e4 * R - (99 - f + 100 * v) - 1),
                    (F.name =
                      ("000" + f).substr(-3) + ("000" + v).substr(-3) + R + J),
                    console.log("new insert  item:" + F.name),
                    s[f][v][R] !== F.name)
                  ) {
                    if (
                      (s[f][v][R] &&
                        (this.node.getChildByName(s[f][v][R]).destroy(),
                        console.log("destroy()" + s[f][v][R]),
                        s[f][v][R].substr(7, 3) >= 118 &&
                          s[f][v][R].substr(7, 3) <= 164 &&
                          ((N[b][0] = f), (N[b][1] = v), (b += 1))),
                      s[f][v][3] && parseInt(J) < 749)
                    ) {
                      var k = s[f][v][3].substr(7, 3);
                      (S = k >= 222 && k <= 224),
                        (q = k >= 301 && k <= 362),
                        (T = k >= 413 && k <= 416),
                        (E =
                          411 == k ||
                          252 == k ||
                          409 == k ||
                          410 == k ||
                          366 == k ||
                          420 == k),
                        (Q = k >= 551 && k <= 567),
                        (S || q || T || E || Q) && l.location(f, v, this.node);
                    }
                    var S, q, T, E, Q;
                    (S = parseInt(J) >= 222 && parseInt(J) <= 224),
                      (q = parseInt(J) >= 301 && parseInt(J) <= 362),
                      (T = parseInt(J) >= 413 && parseInt(J) <= 416),
                      (E =
                        411 == parseInt(J) ||
                        252 == parseInt(J) ||
                        409 == parseInt(J) ||
                        410 == parseInt(J) ||
                        366 == parseInt(J) ||
                        420 == parseInt(J)),
                      (Q = parseInt(J) >= 551 && parseInt(J) <= 567),
                      (S || q || T || E || Q) &&
                        (s[f][v][1] &&
                          s[f][v][1].substr(7, 3) >= 118 &&
                          s[f][v][1].substr(7, 3) <= 164 &&
                          ((N[b][0] = f),
                          (N[b][1] = v),
                          (b += 1),
                          console.log(N)),
                        l.location(f, v, this.node)),
                      (s[f][v][R] = F.name),
                      J >= 118 &&
                        J <= 164 &&
                        ((s[f][v][4] = h.target(f, v)),
                        d.location(f, v, this.node)),
                      J >= 174 &&
                        J <= 189 &&
                        ((s[f][v][5] = p.target(f, v)),
                        m.location(f, v, this.node)),
                      J >= 166 && J <= 173 && g.location(f, v, J, this.node),
                      console.log(F.name),
                      (L.trim = !1),
                      (L.sizeMode = cc.Sprite.SizeMode.RAW),
                      (F.parent = this.node);
                    var I = C[0][c[J][4]].getSpriteFrame(J);
                    (L.spriteFrame = I), (F.scale = c[J][1]);
                  }
                } else {
                  console.log("=more0  start");
                  var z = !0,
                    U = f + "-" + v;
                  console.log(r.erase), console.log(U);
                  for (var H = 3; H > 0; H--)
                    if (s[f][v][H] && z && U !== r.erase) {
                      this.node.getChildByName(s[f][v][H]).destroy();
                      var J = s[f][v][H].substr(7, 3);
                      (s[f][v][H] = void 0),
                        (z = !1),
                        (r.erase = f + "-" + v),
                        J >= 118 &&
                          J <= 164 &&
                          ((s[f][v][4] = void 0),
                          d.location(f, v, this.node, 1)),
                        J >= 174 &&
                          J <= 189 &&
                          ((s[f][v][5] = void 0),
                          m.location(f, v, this.node, 1)),
                        J >= 166 &&
                          J <= 173 &&
                          ((s[f][v][5] = void 0),
                          g.location(f, v, J, this.node, 1));
                    }
                }
            }
            for (var D = 0; D < b; D++)
              d.location(N[D][0], N[D][1], this.node, 1);
            for (var M = 0; M < b; M++) (N[M][0] = void 0), (N[M][1] = void 0);
            b = 0;
            for (var P = 0; P < w; P++)
              m.location(B[P][0], B[P][1], this.node, 1);
            for (var Z = 0; Z < w; Z++) (B[Z][0] = void 0), (B[Z][1] = void 0);
            w = 0;
            for (var G = 0; G < x; G++)
              g.location(O[G][0], O[G][1], A[G], this.node, 1);
            for (var V = 0; V < x; V++)
              (O[V][0] = void 0), (O[V][1] = void 0), (A[V] = void 0);
            x = 0;
          },
          onLoad: function () {
            this.node.on(
              cc.Node.EventType.TOUCH_MOVE,
              this.on_touch_move,
              this
            ),
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        bridge_to_item: "bridge_to_item",
        change_bridge: "change_bridge",
        change_sub_bridge: "change_sub_bridge",
        change_water: "change_water",
        delete_all: "delete_all",
        get_bridge_envir: "get_bridge_envir",
        get_water_envir: "get_water_envir",
        item_data: "item_data",
        item_state: "item_state",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
        tools_state: "tools_state",
        touch_lock: "touch_lock",
        water_to_item: "water_to_item",
      },
    ],
    earth_button: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0398c8/anBDw5c6oTGbcUBG", "earth_button");
        e("get_canvas");
        var a = e("timer"),
          o = e("earth_state"),
          c = e("paper_other_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            console.log("sjdfoasdifjsaiojfosajfdos");
            var t = (t = this.node.parent.name).substr(1, 1),
              n = o[t][0],
              a = this.target.getComponent(cc.Sprite);
            cc.loader.loadRes(n, cc.SpriteFrame, function (e, t) {
              a.spriteFrame = t;
            }),
              (c.earth = o[t][0]);
            var i = o[t][1],
              s = this.button.getComponent(cc.Sprite);
            cc.loader.loadRes(i, cc.SpriteFrame, function (e, t) {
              s.spriteFrame = t;
            }),
              (o[0][0] = o[t][0]);
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        paper_other_state: "paper_other_state",
        timer: "timer",
      },
    ],
    earth_state: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fedddv2J4hBPLPhP5qBzdL1", "earth_state");
        for (var a = new Array(8), o = 0; o < 8; o++) a[o] = new Array(2);
        (a[0][0] = "earth_1"),
          (a[1][0] = "earth_1"),
          (a[1][1] = "earth_11"),
          (a[2][0] = "earth_2"),
          (a[2][1] = "earth_22"),
          (a[3][0] = "earth_3"),
          (a[3][1] = "earth_33"),
          (a[4][0] = "earth_4"),
          (a[4][1] = "earth_44"),
          (a[5][0] = "earth_5"),
          (a[5][1] = "earth_55"),
          (a[6][0] = "earth_6"),
          (a[6][1] = "earth_66"),
          (a[7][0] = "earth_7"),
          (a[7][1] = "earth_77"),
          (t.exports = a),
          cc._RF.pop();
      },
      {},
    ],
    get_bridge_envir: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a8305ddEO9BVK+jez+DjAU2", "get_bridge_envir");
        var a = e("paper_state"),
          o =
            (e("delete_all"),
            e("item_data"),
            {
              target: function (e, t) {
                var n,
                  o = 1;
                a[e + 1][t][2] &&
                  ((n = (n = a[e + 1][t][2]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 174 && n <= 189 && (o *= 2),
                  (166 != n && 167 != n) || (o *= 2));
                a[e][t - 1][2] &&
                  ((n = (n = a[e][t - 1][2]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 174 && n <= 189 && (o *= 3),
                  (168 != n && 169 != n) || (o *= 3));
                a[e - 1][t][2] &&
                  ((n = (n = a[e - 1][t][2]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 174 && n <= 189 && (o *= 5),
                  (170 != n && 171 != n) || (o *= 5));
                a[e][t + 1][2] &&
                  ((n = (n = a[e][t + 1][2]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 174 && n <= 189 && (o *= 7),
                  (172 != n && 173 != n) || (o *= 7));
                return o;
              },
            });
        (t.exports = o), cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        item_data: "item_data",
        paper_state: "paper_state",
      },
    ],
    get_canvas: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "54b796MJGJGiaTBEQFu+gHE", "get_canvas");
        e("paper_state"), e("delete_all"), e("item_data");
        (t.exports = {
          target: function (e) {
            if ("Canvas" == e.name) return e;
            for (var t = 0; t < 15; t++)
              if (e && "Canvas" == (e = e.parent).name) return e;
          },
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        item_data: "item_data",
        paper_state: "paper_state",
      },
    ],
    get_water_envir: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3b56ePl2eNAHaoupzFUHyYP", "get_water_envir");
        var a = e("paper_state"),
          o =
            (e("delete_all"),
            e("item_data"),
            {
              target: function (e, t) {
                console.log(a[e + 1][t][1]);
                var n,
                  o = 1;
                a[e + 1][t][1] &&
                  ((n = (n = a[e + 1][t][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 2));
                t - 1 >= 0 &&
                  a[e][t - 1][1] &&
                  ((n = (n = a[e][t - 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 3));
                e - 1 >= 0 &&
                  a[e - 1][t][1] &&
                  ((n = (n = a[e - 1][t][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 5));
                a[e][t + 1][1] &&
                  ((n = (n = a[e][t + 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 7));
                t - 1 >= 0 &&
                  a[e + 1][t - 1][1] &&
                  ((n = (n = a[e + 1][t - 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 11));
                e - 1 >= 0 &&
                  t - 1 >= 0 &&
                  a[e - 1][t - 1][1] &&
                  ((n = (n = a[e - 1][t - 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 13));
                e - 1 >= 0 &&
                  a[e - 1][t + 1][1] &&
                  ((n = (n = a[e - 1][t + 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 17));
                a[e + 1][t + 1][1] &&
                  ((n = (n = a[e + 1][t + 1][1]).substr(n.length - 3, 3)),
                  console.log(n),
                  n >= 118 && n <= 164 && (o *= 19));
                return o;
              },
            });
        (t.exports = o), cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        item_data: "item_data",
        paper_state: "paper_state",
      },
    ],
    helloToOpen: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "5e2b7yU0qdI3JqTWY8lsQw3", "helloToOpen"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {
              var e = cc.director.getScene().name;
              cc.director.preloadScene("open", function () {
                cc.log("Next scene preloaded");
              }),
                this.scheduleOnce(function () {
                  cc.director.loadScene("open" + e.substr(8, e.length - 8));
                }, 3.7);
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    home: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6581bGdxqRIWoYinKpYisMC", "home");
        var a = e("altas_list");
        cc.Class({
          extends: cc.Component,
          properties: {
            tab_button: {
              default: [],
              type: cc.Button,
            },
            tab_content: {
              default: [],
              type: cc.Node,
            },
          },
          onLoad: function () {
            for (
              var e = function (e) {
                  cc.loader.loadRes(a[0][e], cc.SpriteAtlas, function (t, n) {
                    a[0][e] = n;
                  });
                },
                t = 1;
              t <= 7;
              t++
            )
              e(t);
            cc.loader.loadRes(a[0][8], cc.SpriteAtlas, function (e, t) {
              a[0][8] = t;
            }),
              cc.loader.loadRes(a[0][9], cc.SpriteAtlas, function (e, t) {
                a[0][9] = t;
              });
          },
          start: function () {
            this.on_tab_button_click(null, "0");
          },
          disable_tab: function (e) {
            (this.tab_button[e].interactable = !0),
              (this.tab_content[e].active = !1);
          },
          enable_tab: function (e) {
            (this.tab_button[e].interactable = !1),
              (this.tab_content[e].active = !0);
          },
          on_tab_button_click: function (e, t) {
            console.log(e), (t = parseInt(t));
            for (var n = 0; n < this.tab_button.length; n++)
              n == t ? this.enable_tab(n) : this.disable_tab(n);
          },
        }),
          cc._RF.pop();
      },
      {
        altas_list: "altas_list",
      },
    ],
    initialization: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "75650Qua6tMLq1P+G4mq9p+", "initialization");
        var a = e("new_size"),
          o = e("item_data"),
          c = (e("loading_earth"), e("get_canvas")),
          i = (e("timer"), e("paper_state")),
          s = e("delete_all"),
          r = e("delete_earth"),
          l = (e("item_state"), e("model_insert")),
          h = e("viewOpen_select"),
          d = e("document_data");
        e("new_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            ground: {
              default: null,
              type: cc.Node,
            },
            ground_item: {
              default: null,
              type: cc.Prefab,
            },
          },
          onLoad: function () {
            var e;
            if (
              ((this.node.getChildByName("paper_zoom").width = 100 * a.w),
              (this.node.getChildByName("paper_zoom").height = 100 * a.h),
              (this.node
                .getChildByName("paper_zoom")
                .getChildByName("paper").width = 100 * a.w),
              (this.node
                .getChildByName("paper_zoom")
                .getChildByName("paper").height = 100 * a.h),
              (this.node
                .getChildByName("paper_zoom")
                .getChildByName("paper")
                .getChildByName("ground").zIndex = -3e4),
              (this.node.getChildByName("earth_change").active = !1),
              c.target(this.node).width < 1200
                ? ((this.node.getChildByName("Q2").x = 0),
                  (this.node.getChildByName("Q3").x = 0),
                  (this.node.getChildByName("Q4").x = 0),
                  (this.node.getChildByName("Q5").x = 0),
                  (this.node.getChildByName("Q6").x = 0),
                  (this.node.getChildByName("Q7").x = 0),
                  (this.node.getChildByName("Q8").x = 0),
                  (this.node.getChildByName("Q9").x = 0))
                : ((this.node.getChildByName("Q1").x = -479.365),
                  (this.node.getChildByName("Q2").x = -479.365),
                  (this.node.getChildByName("Q3").x = -479.365),
                  (this.node.getChildByName("Q4").x = -479.365),
                  (this.node.getChildByName("Q5").x = -479.365),
                  (this.node.getChildByName("Q6").x = -479.365),
                  (this.node.getChildByName("Q7").x = -479.365),
                  (this.node.getChildByName("Q8").x = -479.365),
                  (this.node.getChildByName("Q9").x = -479.365)),
              (e = {
                name: "1111",
                scale: 1,
                x: 0,
                y: 0,
              }),
              cc.sys.localStorage.setItem("A1", JSON.stringify(e)),
              (this.node.getChildByName("Tx1").getComponent(cc.Label).string =
                o[101][1]),
              "newfile20191012" !== d.name)
            ) {
              var t = c
                .target(this.node)
                .getChildByName("paper_zoom")
                .getChildByName("paper");
              console.log(h);
              h.val;
              var n = d.name,
                u = JSON.parse(cc.sys.localStorage.getItem(n));
              if ("string" != typeof u[2]) {
                var p = JSON.parse(cc.sys.localStorage.getItem(n + "data"));
                (a.w = p.w),
                  (a.h = p.h),
                  (t.width = 100 * p.w),
                  (t.height = 100 * p.h),
                  (t.getChildByName("ground").width = 100 * p.w),
                  (t.getChildByName("ground").height = 100 * p.h),
                  (t.getChildByName("grid").width = 100 * p.w),
                  (t.getChildByName("grid").height = 100 * p.h),
                  (d.name = n);
                var _ = JSON.parse(
                    cc.sys.localStorage.getItem(n + "data")
                  ).earth,
                  m = this.ground.getComponent(cc.Sprite);
                cc.loader.loadRes(_, cc.SpriteFrame, function (e, t) {
                  m.spriteFrame = t;
                });
                for (var g = 0; g < 100; g++)
                  for (var C = 0; C < 100; C++) {
                    s.location(g, C, t), r.location(g, C, t);
                    for (var y = 0; y < 6; y++)
                      if (u[g][C][y])
                        if (y < 4) {
                          var f = u[g][C][y].substr(6, 3);
                          (i[g][C][y] =
                            ("000" + g).substr(-3) +
                            ("000" + C).substr(-3) +
                            y +
                            f),
                            console.log(f),
                            console.log(o[f][0]);
                          var v = 1e4 * o[f][0] - (99 - g + 100 * C) - 1;
                          l.data(g, C, i[g][C][y], v, t, f);
                        } else i[g][C][y] = u[g][C][y];
                  }
              } else {
                (a.w = u[0]),
                  (a.h = u[1]),
                  (t.width = 100 * a.w),
                  (t.height = 100 * a.h),
                  (t.getChildByName("ground").width = 100 * a.w),
                  (t.getChildByName("ground").height = 100 * a.h),
                  (t.getChildByName("grid").width = 100 * a.w),
                  (t.getChildByName("grid").height = 100 * a.h),
                  (d.name = n);
                (_ = u[2]), (m = this.ground.getComponent(cc.Sprite));
                cc.loader.loadRes(_, cc.SpriteFrame, function (e, t) {
                  m.spriteFrame = t;
                });
                for (g = 0; g < 100; g++)
                  for (C = 0; C < 100; C++)
                    s.location(g, C, t), r.location(g, C, t);
                for (var N = 3; N < u.length; N++) {
                  var b = u[N].substr(6, 1),
                    B = parseInt(u[N].substr(0, 3)),
                    w = parseInt(u[N].substr(3, 3));
                  if (b < 4) {
                    i[B][w][b] = u[N];
                    v = 1e4 * b - (99 - B + 100 * w) - 1;
                    (f = u[N].substr(7, u[N].length - 7)),
                      l.data(B, w, u[N], v, t, f);
                  } else i[B][w][b] = u[N].substr(7, u[N].length - 7);
                }
              }
            }
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        loading_earth: "loading_earth",
        model_insert: "model_insert",
        new_data: "new_data",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    item_data: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "33ac433GtdHzYaDVABQhnl3", "item_data");
        for (var a = new Array(1e3), o = 0; o < 1e3; o++)
          (a[o] = new Array(5)),
            (a[o][0] = 1),
            (a[o][1] = 0.79),
            (a[o][2] = 0),
            (a[o][3] = 0),
            (a[o][4] = 8);
        for (o = 749; o < 1e3; o++)
          (a[o][0] = 0), (a[o][1] = 0.79), (a[o][2] = 0), (a[o][3] = 0);
        for (o = 301; o <= 748; o++) a[o][4] = 9;
        for (o = 749; o <= 781; o++) a[o][4] = 1;
        for (o = 782; o <= 814; o++) a[o][4] = 2;
        for (o = 815; o <= 847; o++) a[o][4] = 3;
        for (o = 848; o <= 880; o++) a[o][4] = 4;
        for (o = 881; o <= 913; o++) a[o][4] = 5;
        for (o = 914; o <= 946; o++) a[o][4] = 6;
        for (o = 947; o <= 979; o++) a[o][4] = 7;
        for (o = 166; o <= 189; o++) a[o][0] = 2;
        for (o = 106; o <= 112; o++) a[o][0] = 2;
        for (o = 200; o < 748; o++) a[o][0] = 3;
        for (o = 113; o <= 117; o++) a[o][1] = 0.62;
        for (o = 201; o <= 207; o++) (a[o][2] = -6), (a[o][3] = -2.3);
        (a[104][2] = -13.8),
          (a[104][3] = 8),
          (a[105][2] = -13.8),
          (a[105][3] = 8),
          (a[206][2] = -8.658),
          (a[206][3] = -33.188);
        for (o = 208; o <= 214; o++) (a[o][2] = -8.4), (a[o][3] = -6);
        a[213][3] = -23.432;
        for (o = 215; o <= 221; o++) (a[o][2] = -3.6), (a[o][3] = -4.5);
        for (o = 222; o <= 224; o++) (a[o][2] = -0.059), (a[o][3] = -26.445);
        (a[223][2] = -6),
          (a[225][2] = -23.354),
          (a[225][3] = -30.172),
          (a[226][2] = -2.163),
          (a[226][3] = -30.172);
        for (o = 227; o <= 238; o++) a[o][2] = -1.372;
        (a[227][3] = -13.108),
          (a[228][3] = -13.108),
          (a[229][3] = 4.521),
          (a[230][3] = 4.521),
          (a[231][3] = 21.681),
          (a[232][3] = 21.681),
          (a[233][3] = 39.034),
          (a[234][3] = 39.034),
          (a[235][3] = 53.947),
          (a[236][3] = 53.947),
          (a[237][3] = 83.755),
          (a[238][3] = 83.755),
          (a[239][3] = -4.43506),
          (a[241][2] = -10.544),
          (a[241][3] = -4.63),
          (a[246][3] = 28.485),
          (a[247][3] = 46.73),
          (a[248][2] = 26.833),
          (a[248][3] = 13.115),
          (a[249][2] = 26.833),
          (a[249][3] = 29.986),
          (a[250][2] = 26.833),
          (a[250][3] = 48.049),
          (a[251][2] = 26.833),
          (a[251][3] = 62.924),
          (a[252][2] = 0),
          (a[252][3] = -23.808),
          (a[301][2] = -5.807),
          (a[301][3] = 111.275),
          (a[302][2] = 4.829),
          (a[302][3] = 133.382),
          (a[303][2] = 2.022),
          (a[303][3] = 105.313),
          (a[304][2] = -1.398),
          (a[304][3] = 138.372),
          (a[305][2] = 7.241),
          (a[305][3] = 103.815),
          (a[306][2] = -11.004),
          (a[306][3] = 155.565),
          (a[307][2] = -41.559),
          (a[307][3] = 105.565),
          (a[308][2] = -15.988),
          (a[308][3] = 87.515),
          (a[309][2] = 11.79),
          (a[309][3] = 50.478),
          (a[310][2] = 0.679),
          (a[310][3] = 61.589),
          (a[311][2] = 10.922),
          (a[311][3] = 183.126),
          (a[312][2] = 0.113),
          (a[312][3] = 79.359),
          (a[313][2] = 0.113),
          (a[313][3] = 79.359),
          (a[314][2] = -1.398),
          (a[314][3] = 138.372),
          (a[315][2] = -1.398),
          (a[315][3] = 134.668),
          (a[350][2] = 0),
          (a[350][3] = -35.338),
          (a[350][1] = 0.76),
          (a[351][2] = 0),
          (a[351][3] = -10.338),
          (a[351][1] = 0.76),
          (a[352][2] = 0),
          (a[352][3] = -10.338),
          (a[352][1] = 0.76),
          (a[353][2] = 0),
          (a[353][3] = -4.783),
          (a[353][1] = 0.76),
          (a[354][2] = 0),
          (a[354][3] = 0),
          (a[354][1] = 0.76),
          (a[355][2] = 0),
          (a[355][3] = 49.671),
          (a[355][1] = 0.76),
          (a[356][2] = 0),
          (a[356][3] = -29.63),
          (a[356][1] = 0.76),
          (a[357][2] = 0),
          (a[357][3] = -5.564),
          (a[357][1] = 0.76),
          (a[358][2] = 0),
          (a[358][3] = -21.91),
          (a[358][1] = 0.76),
          (a[359][2] = 0),
          (a[359][3] = -9.873),
          (a[359][1] = 0.76),
          (a[360][2] = 0),
          (a[360][3] = 2.7),
          (a[360][1] = 0.76),
          (a[361][2] = 0),
          (a[361][3] = 2.7),
          (a[361][1] = 0.76),
          (a[362][2] = 0),
          (a[362][3] = 2.7),
          (a[362][1] = 0.76),
          (a[363][2] = 1.833),
          (a[363][3] = 3.665),
          (a[364][2] = 0),
          (a[364][3] = 31.322),
          (a[365][2] = 0),
          (a[365][3] = 31.322),
          (a[367][2] = 0),
          (a[367][3] = 9.278),
          (a[367][1] = 0.76),
          (a[400][2] = 0),
          (a[400][3] = 40.966),
          (a[400][1] = 0.76),
          (a[401][2] = 0),
          (a[401][3] = 13.607),
          (a[401][1] = 0.76),
          (a[402][2] = 30.556),
          (a[402][3] = 77.077),
          (a[402][1] = 0.76),
          (a[403][2] = 0),
          (a[403][3] = -2.777),
          (a[403][1] = 0.76),
          (a[404][2] = 0),
          (a[404][3] = 42.473),
          (a[404][1] = 0.76),
          (a[405][2] = -1.852),
          (a[405][3] = -19.444),
          (a[405][1] = 0.76),
          (a[406][2] = 23.194),
          (a[406][3] = -19.444),
          (a[406][1] = 0.76),
          (a[407][2] = 12.083),
          (a[407][3] = 7.648),
          (a[407][1] = 0.76),
          (a[408][2] = 0),
          (a[408][3] = 0),
          (a[408][1] = 0.76),
          (a[409][2] = -2.167),
          (a[409][3] = 0.426),
          (a[409][1] = 0.76),
          (a[410][2] = -38.014),
          (a[410][3] = 0.426),
          (a[410][1] = 0.76),
          (a[411][2] = -5.7),
          (a[411][3] = 0.426),
          (a[411][1] = 0.76),
          (a[412][2] = -10.26),
          (a[412][3] = 41.038),
          (a[412][1] = 0.76),
          (a[413][2] = 0),
          (a[413][3] = 10.955),
          (a[413][1] = 0.76),
          (a[414][2] = 0),
          (a[414][3] = 39.385),
          (a[414][1] = 0.76),
          (a[415][2] = 0),
          (a[415][3] = 35.285),
          (a[415][1] = 0.76),
          (a[416][2] = 48.886),
          (a[416][3] = 72.889),
          (a[416][1] = 0.76),
          (a[417][2] = -1.504),
          (a[417][3] = -8.336),
          (a[417][1] = 0.76),
          (a[419][2] = 0),
          (a[419][3] = 27.698),
          (a[419][1] = 0.76),
          (a[451][2] = 0),
          (a[451][3] = -6.484),
          (a[451][1] = 0.76),
          (a[452][2] = 0),
          (a[452][3] = -24.811),
          (a[452][1] = 0.76),
          (a[453][2] = 0),
          (a[453][3] = -21.757),
          (a[453][1] = 0.76),
          (a[454][2] = 0),
          (a[454][3] = -17.997),
          (a[454][1] = 0.76),
          (a[455][2] = 0),
          (a[455][3] = -17.101),
          (a[455][1] = 0.76),
          (a[456][2] = 0),
          (a[456][3] = -25.434),
          (a[456][1] = 0.76),
          (a[457][2] = 0),
          (a[457][3] = -25.56),
          (a[457][1] = 0.76),
          (a[458][2] = 0),
          (a[458][3] = -16.315),
          (a[458][1] = 0.76),
          (a[459][2] = 0),
          (a[459][3] = 86.321 - 100),
          (a[459][1] = 0.76),
          (a[461][2] = 0),
          (a[461][3] = -21.367),
          (a[461][1] = 0.76),
          (a[461][2] = 0),
          (a[461][3] = -19.23),
          (a[461][1] = 0.76),
          (a[462][2] = 0),
          (a[462][3] = -27.174),
          (a[462][1] = 0.76),
          (a[463][2] = 0),
          (a[463][3] = -29.369),
          (a[463][1] = 0.76),
          (a[464][2] = 0),
          (a[464][3] = -29.369),
          (a[464][1] = 0.76),
          (a[469][2] = 0),
          (a[469][3] = -17.822),
          (a[469][1] = 0.76),
          (a[467][2] = 21.901),
          (a[467][3] = -27.054),
          (a[467][1] = 0.76),
          (a[501][2] = 5.556),
          (a[501][3] = 24.074),
          (a[501][1] = 0.76),
          (a[502][2] = 11.256),
          (a[502][3] = 1.275),
          (a[502][1] = 0.76),
          (a[503][2] = 15.886),
          (a[503][3] = 14.238),
          (a[503][1] = 0.76),
          (a[504][2] = 18.663),
          (a[504][3] = 23.497),
          (a[504][1] = 0.76),
          (a[505][2] = 8.478),
          (a[505][3] = 0.349),
          (a[505][1] = 0.76),
          (a[506][2] = 5.7),
          (a[506][3] = 18.868),
          (a[506][1] = 0.76),
          (a[507][2] = 5.7),
          (a[507][3] = -1.651),
          (a[507][1] = 0.76),
          (a[508][2] = 0),
          (a[508][3] = 0),
          (a[508][1] = 0.76),
          (a[509][2] = 0),
          (a[509][3] = 0),
          (a[509][1] = 0.76),
          (a[510][2] = 0),
          (a[510][3] = -25.262),
          (a[510][1] = 0.76),
          (a[511][2] = 0),
          (a[511][3] = 5.7),
          (a[511][1] = 0.76),
          (a[512][2] = 12.182),
          (a[512][3] = 11.212),
          (a[512][1] = 0.79),
          (a[513][2] = 6.482),
          (a[513][3] = -5.887),
          (a[513][1] = 0.79),
          (a[514][2] = 0.782),
          (a[514][3] = -2.467),
          (a[514][1] = 0.79),
          (a[551][2] = 7.8),
          (a[551][3] = 168.753),
          (a[551][1] = 0.79),
          (a[552][2] = 0),
          (a[552][3] = 20.539),
          (a[552][1] = 0.79),
          (a[553][2] = 0),
          (a[553][3] = 0),
          (a[553][1] = 0.79),
          (a[554][2] = 0),
          (a[554][3] = 0),
          (a[554][1] = 0.79),
          (a[555][2] = 0),
          (a[555][3] = -18.245),
          (a[555][1] = 0.79),
          (a[556][2] = 0),
          (a[556][3] = -18.245),
          (a[556][1] = 0.79),
          (a[557][2] = 0),
          (a[557][3] = 0),
          (a[557][1] = 0.79),
          (a[558][2] = 0),
          (a[558][3] = -21),
          (a[558][1] = 0.79),
          (a[559][2] = 0),
          (a[559][3] = -21),
          (a[559][1] = 0.79),
          (a[560][2] = 3.481),
          (a[560][3] = -21),
          (a[560][1] = 0.79),
          (a[561][2] = 0),
          (a[561][3] = 0),
          (a[561][1] = 0.79),
          (a[562][2] = 5.556),
          (a[562][3] = 34.115),
          (a[562][1] = 0.79),
          (a[563][2] = 0),
          (a[563][3] = 0),
          (a[563][1] = 0.79),
          (a[564][2] = 0),
          (a[564][3] = -4.89),
          (a[564][1] = 0.79),
          (a[565][2] = -5.93),
          (a[565][3] = 63.373),
          (a[565][1] = 0.79),
          (a[566][2] = 0),
          (a[566][3] = -19.411),
          (a[566][1] = 0.79),
          (a[567][2] = -3),
          (a[567][3] = 8.802),
          (a[567][1] = 0.79),
          (t.exports = a),
          cc._RF.pop();
      },
      {},
    ],
    item_state: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fb22asZ2g9Ib68Tje9wBC5Q", "item_state");
        var a = new Array(11);
        (a[0] = 101),
          (a[1] = 101),
          (a[2] = 201),
          (a[3] = 301),
          (a[4] = 351),
          (a[5] = 400),
          (a[6] = 451),
          (a[7] = 511),
          (a[8] = 552),
          (a[9] = 749),
          (t.exports = a),
          cc._RF.pop();
      },
      {},
    ],
    label_sub_new: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "55f89ouqdVGKbICB3ZM3Dxg", "label_sub_new"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
              this.anim_com = this.node.getComponent(cc.Animation);
            },
            start: function () {},
            in: function (e, t) {
              console.log(this.anim_com), this.anim_com.play("in");
            },
            out: function (e, t) {
              this.anim_com.play("out");
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    label_sub_old: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8992dP33KpMdbfOr8OnXst4", "label_sub_old"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
              this.anim_com = this.node.getComponent(cc.Animation);
            },
            start: function () {},
            in: function (e, t) {
              console.log(this.anim_com), this.anim_com.play("in");
            },
            shape_in: function () {
              this.node.active = !0;
            },
            shape_out: function () {},
            out: function (e, t) {
              this.anim_com.play("out");
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    loading_earth: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "69a64ahioBN0qon07tpECo7", "loading_earth");
        var a = e("paper_state"),
          o = e("item_data"),
          c = e("get_canvas"),
          i =
            (e("delete_earth"),
            e("model_insert_pro"),
            {
              data: function (e, t, n, i, s) {
                for (
                  var r = c
                      .target(i)
                      .getChildByName("paper_zoom")
                      .getChildByName("paper"),
                    l = 0;
                  l < e;
                  l++
                )
                  for (var h = 0; h < t; h++) {
                    var d = parseInt(n) + Math.floor(32 * Math.random()) + 1,
                      u = 0 - (99 - l + 100 * h) - 1,
                      p = (u = ("00000000" + u).substr(-5)) + "-" + d;
                    a[l][h][0] = p;
                    var _ = cc.instantiate(s);
                    r.addChild(_),
                      (_.name = p),
                      (_.x = 100 * l + 50 - r.width / 2 + o[d][2]),
                      (_.y = 100 * h + 50 - r.height / 2 + o[d][3]);
                  }
                console.log("success!!!!!!!!!!!");
              },
            });
        (t.exports = i), cc._RF.pop();
      },
      {
        delete_earth: "delete_earth",
        get_canvas: "get_canvas",
        item_data: "item_data",
        model_insert_pro: "model_insert_pro",
        paper_state: "paper_state",
      },
    ],
    loading: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "80a8233TchOAZw8lDtj8Tpc", "loading");
        var a = e("new_size");
        e("altas_list");
        cc.Class({
          extends: cc.Component,
          properties: {
            progress: cc.ProgressBar,
            text: cc.Label,
            width: cc.Label,
            height: cc.Label,
          },
          create: function () {
            var e = this;
            (this.node.getChildByName("loading").active = !0),
              (a.w = this.width.getComponent(cc.Label).string),
              console.log(a.w),
              (a.h = this.height.getComponent(cc.Label).string),
              console.log(a.h),
              (this.text.string = "0%"),
              (this.progress.progress = 0),
              cc.director.preloadScene(
                "workpaper" +
                  cc.director
                    .getScene()
                    .name.substr(4, cc.director.getScene().name.length - 4),
                function (t, n, a) {
                  var o = t / n;
                  (e.progress.progress = o),
                    (e.text.string = parseInt(100 * o) + "%"),
                    console.log(e.text.string);
                },
                function () {
                  cc.director.loadScene(
                    "workpaper" +
                      cc.director
                        .getScene()
                        .name.substr(4, cc.director.getScene().name.length - 4)
                  );
                }
              );
          },
        }),
          cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        new_size: "new_size",
      },
    ],
    model_change_name: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "15366ZWo5VO+phHmaKVzrmr", "model_change_name");
        var a = e("paper_state"),
          o = {
            data: function (e, t, n, o, c) {
              var i = n.getChildByName(c).name;
              console.log("@@@@@@@@@@@@@@@" + i);
              i = i.substr(0, i.length - 3) + o;
              console.log("@@@@@@@@@@@@@@@" + i),
                (n.getChildByName(c).name = i),
                (a[e][t][1] = i);
            },
          };
        (t.exports = o), cc._RF.pop();
      },
      {
        paper_state: "paper_state",
      },
    ],
    model_change_pic: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fe81enOMhpEopZ2b99cWQTJ", "model_change_pic");
        var a = e("paper_state"),
          o = e("water_to_item"),
          c =
            (e("item_data"),
            {
              data: function (e, t, n, c) {
                var i = a[e][t][1],
                  s = (i.substr(i.length - 3, 3), a[e][t][4] * c);
                a[e][t][4] = s;
                var r = o.target(s);
                cc.loader.loadRes(String(r), cc.SpriteFrame, function (e, t) {
                  n.getChildByName(i).getComponent(cc.Sprite).spriteFrame = t;
                });
                var l = i;
                console.log("@@@@@@@@@@@@@@@" + l),
                  (l = l.substr(0, l.length - 3) + r),
                  console.log("@@@@@@@@@@@@@@@" + l),
                  (n.getChildByName(i).name = l),
                  (a[e][t][1] = l);
              },
            });
        (t.exports = c), cc._RF.pop();
      },
      {
        item_data: "item_data",
        paper_state: "paper_state",
        water_to_item: "water_to_item",
      },
    ],
    model_insert_pro: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d422dxGFK9OWKhXCINvFnkX", "model_insert_pro");
        e("paper_state");
        var a = e("item_data"),
          o =
            (e("paper_other_state"),
            {
              data: function (e, t, n, o, c, i, s, r) {
                var l = cc.instantiate(r);
                l.getComponent(cc.Sprite);
                (l.x = 100 * e + 50 - c.width / 2 + a[i][2]),
                  (l.y = 100 * t + 50 - c.height / 2 + a[i][3]),
                  c.addChild(l, o, n);
              },
            });
        (t.exports = o), cc._RF.pop();
      },
      {
        item_data: "item_data",
        paper_other_state: "paper_other_state",
        paper_state: "paper_state",
      },
    ],
    model_insert: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ced04yuipBKHJZPHnICQt9I", "model_insert");
        e("paper_state");
        var a = e("item_data"),
          o = e("altas_list"),
          c = {
            data: function (e, t, n, c, i, s) {
              var r = new cc.Node("new sprite"),
                l = r.addComponent(cc.Sprite);
              (r.x = 100 * e + 50 - i.width / 2 + a[s][2]),
                (r.y = 100 * t + 50 - i.height / 2 + a[s][3]),
                (r.zIndex = c),
                (r.name = n),
                (l.trim = !1),
                (l.sizeMode = cc.Sprite.SizeMode.RAW),
                (r.parent = i);
              var h = o[0][a[s][4]].getSpriteFrame(s);
              (l.spriteFrame = h), (r.scale = a[s][1]);
            },
          };
        (t.exports = c), cc._RF.pop();
      },
      {
        altas_list: "altas_list",
        item_data: "item_data",
        paper_state: "paper_state",
      },
    ],
    "model_photo - -": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "cbdbfin8lBPFr/RFIq7VUVl", "model_photo - -"),
          cc.Class({
            extends: cc.Component,
            properties: {
              target: {
                default: null,
                type: cc.Node,
              },
            },
            on_touch_end: function (e) {},
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.on_touch_cancel,
                  this
                );
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    "model_photo - 001": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "5bd11ea07dLJZq/zxO5T8gT", "model_photo - 001"),
          cc.Class({
            extends: e("textureRenderUtils"),
            properties: {
              _width: 0,
              _height: 0,
            },
            on_touch_end: function (e) {
              var t = cc.director.getWinSize(),
                n = jsb.fileUtils.getWritablePath() + "result_share.jpg";
              jsb.fileUtils.isFileExist(n) && jsb.fileUtils.removeFile(n);
              var a = new cc.RenderTexture(
                Math.floor(t.width),
                Math.floor(t.height)
              );
              a.begin(),
                cc.director.getRunningScene().visit(),
                a.end(),
                a.saveToFile("result_share.jpg", cc.ImageFormat.PNG);
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.on_touch_cancel,
                  this
                );
            },
          }),
          cc._RF.pop();
      },
      {
        textureRenderUtils: "textureRenderUtils",
      },
    ],
    model_photo: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8d2d3DEFlpIoZPy2BeEZpnj", "model_photo"),
          cc.Class({
            extends: e("textureRenderUtils"),
            properties: {
              _width: 0,
              _height: 0,
            },
            on_touch_end: function (e) {
              var t = this;
              this.init(),
                this.schedule(
                  function () {
                    var e = t.initImage();
                    t.saveFile(e);
                  },
                  0,
                  0
                ),
                console.log(this.camera);
            },
            initImage: function () {
              var e = this.texture.readPixels();
              return (
                (this._width = this.texture.width),
                (this._height = this.texture.height),
                this.filpYImage(e, this._width, this._height)
              );
            },
            createCanvas: function (e) {
              var t = new cc.Texture2D();
              t.initWithData(e, 32, this._width, this._height);
              var n = new cc.SpriteFrame();
              n.setTexture(t);
              var a = new cc.Node();
              (a.addComponent(cc.Sprite).spriteFrame = n),
                (a.zIndex = cc.macro.MAX_ZINDEX),
                (a.parent = cc.director.getScene());
              var o = cc.winSize.width,
                c = cc.winSize.height;
              (a.x = o / 2),
                (a.y = c / 2),
                a.on(cc.Node.EventType.TOUCH_START, function () {
                  (a.parent = null), a.destroy();
                }),
                this.captureAction(a, o, c);
            },
            saveFile: function (e) {},
            filpYImage: function (e, t, n) {
              for (
                var a = new Uint8Array(t * n * 4), o = 4 * t, c = 0;
                c < n;
                c++
              )
                for (
                  var i = (n - 1 - c) * t * 4, s = c * t * 4, r = 0;
                  r < o;
                  r++
                )
                  a[s + r] = e[i + r];
              return a;
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.on_touch_cancel,
                  this
                );
            },
          }),
          cc._RF.pop();
      },
      {
        textureRenderUtils: "textureRenderUtils",
      },
    ],
    move: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "295ecrZNatKbbur9g7RRZ6x", "move"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {},
            move_to: function (e, t) {
              if (
                (console.log("#######"),
                console.log(t),
                (t = parseInt(t)),
                console.log(t),
                1 == t)
              ) {
                var n = cc.moveTo(1, cc.p(256, -340)).easing(cc.easeBackOut());
                this.node.runAction(n), console.log("111#######");
              } else {
                console.log("000#######");
                n = cc.moveTo(1, cc.p(-250, -340)).easing(cc.easeBackOut());
                this.node.runAction(n);
              }
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    new_data: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f4fa1uZAX5BPpJ/JsxtCdrz", "new_data");
        var a = e("new_size"),
          o = {
            size: function (e, t) {
              for (var n = new Array(e), a = 0; a < e; a++) {
                n[a] = new Array(t);
                for (var o = 0; o < t; o++) n[a][o] = new Array(6);
              }
              return n;
            },
          };
        console.log("))))))))))))))))))" + a.w), (t.exports = o), cc._RF.pop();
      },
      {
        new_size: "new_size",
      },
    ],
    new_size: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0b854nHWV9Av7bi92lphgSw", "new_size"),
          (t.exports = {
            w: null,
            h: null,
          }),
          cc._RF.pop();
      },
      {},
    ],
    openView_button: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4e749qV6plA9ZOv/Fdg/obg", "openView_button");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("model_insert"),
            e("delete_earth"),
            e("viewOpen_select"));
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            (this.node.getChildByName("Background").color = new cc.Color(
              255,
              166,
              53
            )),
              console.log(o);
            var t = this.node
              .getChildByName("number")
              .getComponent(cc.Label).string;
            parseInt(t) !== o.val &&
              (this.node.parent.children[o.val].getChildByName(
                "Background"
              ).color = new cc.Color(255, 255, 255)),
              (o.val = parseInt(t)),
              console.log(o.val);
          },
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name.substr(0, 9) &&
              (a.t2 = a.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    paper_move_002: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "60d25epd5FHNaghod6D0rIq", "paper_move_002"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            on_touch_move: function (e) {
              var t = e.getTouches();
              if (
                ((this.node.parent
                  .getChildByName("Tx1")
                  .getComponent(cc.Label).string = t.length),
                t.length >= 2)
              ) {
                var n = t[0],
                  a = t[1],
                  o = n.getLocation(),
                  c = a.getLocation(),
                  i = o.add(c).mul(0.5),
                  s = o.sub(c).mag(),
                  r = n.getPreviousLocation(),
                  l = a.getPreviousLocation(),
                  h = r.add(l).mul(0.5),
                  d = r.sub(l).mag(),
                  u = i.sub(h),
                  p = this.node.parent.getChildByName("paper").scale;
                (this.node.parent.getChildByName("paper").x =
                  this.node.parent.getChildByName("paper").x + u.x / 1),
                  (this.node.parent.getChildByName("paper").y =
                    this.node.parent.getChildByName("paper").y + u.y / 1),
                  (this.node.parent.getChildByName("paper").scale =
                    (p * s) / d),
                  (this.node.parent
                    .getChildByName("Tx1")
                    .getComponent(cc.Label).string = u.y / 1),
                  (this.node.parent
                    .getChildByName("Tx3")
                    .getComponent(cc.Label).string =
                    this.node.parent.getChildByName("paper").y),
                  (this.node.parent
                    .getChildByName("Tx2")
                    .getComponent(cc.Label).string =
                    this.node.parent.getChildByName("paper").y + u.y / 1);
              }
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_MOVE,
                this.on_touch_move,
                this
              );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    paper_move: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "17ea3+rxeFKq7eENGd/TL7r", "paper_move"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            on_touch_move: function (e) {
              var t = e.getTouches();
              if (t.length >= 2) {
                var n = t[0],
                  a = t[1],
                  o = n.getLocation(),
                  c = a.getLocation(),
                  i = o.add(c).mul(0.5),
                  s = o.sub(c).mag(),
                  r = n.getPreviousLocation(),
                  l = a.getPreviousLocation(),
                  h = r.add(l).mul(0.5),
                  d = r.sub(l).mag(),
                  u = i.sub(h),
                  p = this.node.parent.getChildByName("paper").scale;
                (this.node.parent.getChildByName("paper").x =
                  this.node.parent.getChildByName("paper").x + u.x / 1),
                  (this.node.parent.getChildByName("paper").y =
                    this.node.parent.getChildByName("paper").y + u.y / 1),
                  (this.node.parent.getChildByName("paper").scale =
                    (p * s) / d),
                  (this.node.parent
                    .getChildByName("Tx1")
                    .getComponent(cc.Label).string = u.y / 1),
                  (this.node.parent
                    .getChildByName("Tx3")
                    .getComponent(cc.Label).string =
                    this.node.parent.getChildByName("paper").y),
                  (this.node.parent
                    .getChildByName("Tx2")
                    .getComponent(cc.Label).string =
                    this.node.parent.getChildByName("paper").y + u.y / 1);
              }
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_MOVE,
                this.on_touch_move,
                this
              );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    paper_other_state: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "61786B4KBNGMpU+sRv4/Jc9", "paper_other_state"),
          (t.exports = {
            earth: "earth_1",
            touch: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    paper_state: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6c07335FkdC17NImzKlkbAj", "paper_state");
        for (var a = new Array(100), o = 0; o < 100; o++) {
          a[o] = new Array(100);
          for (var c = 0; c < 100; c++) a[o][c] = new Array(6);
        }
        (t.exports = a), cc._RF.pop();
      },
      {},
    ],
    photos: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9213ahCPyFGR5rcvkewTxzs", "photos"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    qCount: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8306draJLZAnLFadhEq+Xus", "qCount");
        var a = new Array(10);
        (a[1] = 4),
          (a[2] = 8),
          (a[3] = 3),
          (a[4] = 4),
          (a[5] = 5),
          (a[6] = 3),
          (a[7] = 6),
          (a[8] = 4),
          (a[9] = 1),
          (t.exports = a),
          cc._RF.pop();
      },
      {},
    ],
    "save - 001": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "56d82xPwphHe5sGptwHlP8H", "save - 001"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            on_mouse_down: function (e) {
              var t = JSON.parse(cc.sys.localStorage.getItem("store_data2"));
              this.node.parent.parent
                .getChildByName("new")
                .getChildByName("main")
                .getChildByName("Label")
                .getComponent(cc.Label).string = t[8][4][0];
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_START,
                this.on_mouse_down,
                this
              );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    save_data: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a6195q4PGdFx5HkkTiN9+8H", "save_data");
        e("get_canvas");
        var a = e("timer"),
          o = e("paper_state"),
          c = e("document_data"),
          i = e("earth_state"),
          s = e("new_size");
        cc.Class({
          extends: cc.Component,
          properties: {
            txt: {
              default: null,
              type: cc.Node,
            },
            notice: {
              default: null,
              type: cc.Node,
            },
          },
          savedata: function () {
            a.t2 = 0;
            var e = this.txt.getComponent(cc.Label).string;
            c.name = e;
            i[0][0], s.w, s.h;
            if (JSON.parse(cc.sys.localStorage.getItem(e + "data")))
              this.notice.active = !0;
            else {
              var t,
                n = [];
              n.push(s.w), n.push(s.h), n.push(i[0][0]);
              for (var r = 0; r < s.w; r++)
                for (var l = 0; l < s.h; l++)
                  for (var h = 0; h < 6; h++)
                    if (o[r][l][h])
                      if (h < 4) n.push(o[r][l][h]);
                      else {
                        var d =
                          ("000" + r).substr(-3) +
                          ("000" + l).substr(-3) +
                          h +
                          o[r][l][h];
                        n.push(d);
                      }
              if (
                (console.log(n),
                cc.sys.localStorage.setItem(e, JSON.stringify(n)),
                JSON.parse(cc.sys.localStorage.getItem("document_gravel")))
              )
                (t = JSON.parse(
                  cc.sys.localStorage.getItem("document_gravel")
                )).push(e),
                  cc.sys.localStorage.setItem(
                    "document_gravel",
                    JSON.stringify(t)
                  );
              else
                (t = []).push("we start"),
                  t.push(e),
                  cc.sys.localStorage.setItem(
                    "document_gravel",
                    JSON.stringify(t)
                  );
              var u = JSON.parse(
                cc.sys.localStorage.getItem("document_gravel")
              );
              console.log(u), (this.node.active = !1);
            }
          },
        }),
          cc._RF.pop();
      },
      {
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    save_view_on: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8655a67YE5E1Y0ARav02ui3", "save_view_on");
        e("get_canvas"),
          e("delete_all"),
          e("item_data"),
          e("item_state"),
          e("model_insert"),
          e("delete_earth");
        var a = e("viewOpen_select"),
          o = e("document_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            button: {
              default: null,
              type: cc.Node,
            },
          },
          onLoad: function () {
            if (
              (console.log("dsfasdfadfa" + cc.director.getRunningScene().name),
              JSON.parse(cc.sys.localStorage.getItem("document_gravel")))
            ) {
              var e = JSON.parse(
                cc.sys.localStorage.getItem("document_gravel")
              );
              a.val = 0;
              for (var t = this.button, n = 1; n < t.parent.childrenCount; n++)
                t.parent.children[n].destroy();
              for (var c = 1; c < e.length; c++) {
                t = this.button;
                var i = cc.instantiate(this.button);
                (i.parent = t.parent),
                  i.setPosition(0, 0),
                  (i.active = !0),
                  (i
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = e[c]),
                  (i.getChildByName("number").getComponent(cc.Label).string =
                    c),
                  o.name == e[c] &&
                    ((i.getChildByName("Background").color = new cc.Color(
                      209,
                      187,
                      159
                    )),
                    (a.val = c));
              }
              console.log(this.button.parent.children),
                console.log("select" + a.val),
                (t.parent.parent.height = 75 * (e.length - 1) + 100);
            }
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        viewOpen_select: "viewOpen_select",
      },
    ],
    save: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "bf51cSZ5i9MX4oB3P+mPJcG", "save"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            on_mouse_down: function (e) {
              for (var t = new Array(100), n = 0, a = 0; a < 100; a++) {
                t[a] = new Array(100);
                for (var o = 0; o < 100; o++) {
                  t[a][o] = new Array(5);
                  for (var c = 0; c < 5; c++) (t[a][o][c] = n + 1), (n += 1);
                }
              }
              cc.sys.localStorage.setItem("store_data2", JSON.stringify(t));
              var i = JSON.parse(cc.sys.localStorage.getItem("store_data2"));
              this.node.parent
                .getChildByName("Label")
                .getComponent(cc.Label).string = i[1][1][1];
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_START,
                this.on_mouse_down,
                this
              );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    slide_set_bk: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "cfe9fHh71pGvaLKSLnnSJVa", "slide_set_bk"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {},
            start: function () {},
            width: function (e, t) {
              this.node.width =
                ((Math.round(90 * e.progress) + 10) / 100) * 800;
            },
            height: function (e, t) {
              this.node.height =
                ((Math.round(90 * e.progress) + 10) / 100) * 800;
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    slide_set: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "48540XQ1/pB0acFiwD8HzEU", "slide_set"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
              this.node.getComponent(cc.Label).string = 50;
            },
            start: function () {},
            con: function (e, t) {
              this.node.getComponent(cc.Label).string =
                Math.round(90 * e.progress) + 10;
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    slider: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fe3b58XZGJHt4JgMlG0uIJK", "slider"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {
              this.node.getComponent(cc.Slider).progress = 0.444;
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    start_button: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "21702AS9XBAK6ANbBLaoZF0", "start_button");
        var a = e("new_size");
        cc.Class({
          extends: cc.Component,
          properties: {},
          start: function () {},
          newmap: function (e, t) {
            (a.w = this.node
              .getChildByName("content")
              .getChildByName("new")
              .getChildByName("main")
              .getChildByName("width")
              .getComponent(cc.Label).string),
              console.log(a.w),
              (a.h = this.node
                .getChildByName("content")
                .getChildByName("new")
                .getChildByName("main")
                .getChildByName("height")
                .getComponent(cc.Label).string),
              console.log(a.h),
              this.scheduleOnce(function () {
                cc.director.loadScene("workpaper");
              }, 0);
          },
        }),
          cc._RF.pop();
      },
      {
        new_size: "new_size",
      },
    ],
    testa: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9d9c44JNntLwJxKzxaj1p0b", "testa"),
          cc.Class({
            properties: {
              target: {
                default: null,
                type: cc.Node,
              },
            },
            on_touch_end: function (e) {},
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_END,
                this.on_touch_end,
                this
              ),
                this.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  this.on_touch_cancel,
                  this
                );
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    testlog: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ae0dcmxMYFHJaQ9d5MBNU8d", "testlog");
        var a = e("new_size");
        cc.Class({
          extends: cc.Component,
          properties: {},
          onLoad: function () {
            console.log("$$$$$$$$$$$"), console.log(a.w);
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        new_size: "new_size",
      },
    ],
    textureRenderUtils: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3478azG21FGN5I9wB9ejWwE", "textureRenderUtils"),
          cc.Class({
            extends: cc.Component,
            properties: {
              camera: cc.Camera,
              _canvas: null,
            },
            init: function () {
              var e = new cc.RenderTexture(),
                t = cc.game._renderContext;
              e.update({
                format: cc.Texture2D.PixelFormat.RGB565,
              }),
                e.initWithSize(2e3, 2e3, t.STENCIL_INDEX8),
                (this.camera.targetTexture = e),
                (this.texture = e),
                console.log("1:"),
                console.log(
                  cc.visibleRect.width + "=====" + cc.visibleRect.height
                ),
                console.log("asdasdasd" + this.camera.name);
            },
            createImg: function () {
              var e = this._canvas.toDataURL("image/png"),
                t = document.createElement("img");
              return (t.src = e), t;
            },
            createCanvas: function () {
              var e = this.texture.width,
                t = this.texture.height;
              this._canvas
                ? this.clearCanvas()
                : ((this._canvas = document.createElement("canvas")),
                  (this._canvas.width = e),
                  (this._canvas.height = t));
              var n = this._canvas.getContext("2d");
              this.camera.render();
              for (
                var a = this.texture.readPixels(), o = 4 * e, c = 0;
                c < t;
                c++
              ) {
                for (
                  var i = t - 1 - c,
                    s = n.createImageData(e, 1),
                    r = i * e * 4,
                    l = 0;
                  l < o;
                  l++
                )
                  s.data[l] = a[r + l];
                n.putImageData(s, 0, c);
              }
              return this._canvas;
            },
            showImage: function (e) {
              var t = new cc.Texture2D();
              t.initWithElement(e);
              var n = new cc.SpriteFrame();
              n.setTexture(t);
              var a = new cc.Node();
              (a.addComponent(cc.Sprite).spriteFrame = n),
                (a.zIndex = cc.macro.MAX_ZINDEX),
                (a.parent = cc.director.getScene());
              var o = cc.winSize.width,
                c = cc.winSize.height;
              (a.x = o / 2),
                (a.y = c / 2),
                a.on(cc.Node.EventType.TOUCH_START, function () {
                  (a.parent = null), a.destroy();
                }),
                this.captureAction(a, o, c),
                console.log("2:"),
                console.log(this.texture),
                console.log(t);
              var i = this.texture.readPixels();
              console.log(i);
              var s = jsb.fileUtils.getWritablePath() + "Image.png";
              console.log(s);
            },
            captureAction: function (e, t, n) {
              var a = cc.scaleTo(1, 0.3),
                o = cc.v2(t - t / 6, n / 4),
                c = cc.moveTo(1, o),
                i = cc.spawn(a, c);
              e.runAction(i);
              var s = cc.blink(0.1, 1);
              this.node.runAction(s);
            },
            clearCanvas: function () {
              this._canvas
                .getContext("2d")
                .clearRect(0, 0, this._canvas.width, this._canvas.height);
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    this_active_false: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a1c35DbCFZJtIkaqX+FO42C", "this_active_false");
        e("get_canvas"),
          e("timer"),
          e("paper_state"),
          e("document_data"),
          e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            txt: {
              default: null,
              type: cc.Node,
            },
            notice: {
              default: null,
              type: cc.Node,
            },
          },
          on: function () {
            this.node.active = !1;
          },
        }),
          cc._RF.pop();
      },
      {
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    timer: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "29943QDQJZIp4WwCD+8RqGt", "timer"),
          (t.exports = {
            t1: 0,
            t2: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    tools_state: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8af899aB2xN7YZLWos/SRNk", "tools_state"),
          (t.exports = {
            scale: 0,
            touch: 0,
            t1: null,
            t2: null,
            freeze: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    touch_lock: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a4cf28vPolMk4peXcGRXAm/", "touch_lock"),
          (t.exports = {
            erase: 0,
            touch: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    touch_move: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "83154EmQhJBbKSourcTwh7L", "touch_move"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            on_touch_move: function (e) {
              var t = e.getTouches();
              if (t.length >= 2) {
                var n = t[0],
                  a = t[1],
                  o = n.getLocation(),
                  c = a.getLocation(),
                  i = o.add(c).mul(0.5),
                  s = o.sub(c).mag(),
                  r = n.getPreviousLocation(),
                  l = a.getPreviousLocation(),
                  h = r.add(l).mul(0.5),
                  d = r.sub(l).mag(),
                  u = i.sub(h),
                  p = this.node.parent
                    .getChildByName("drawing_camera")
                    .getComponent(cc.Camera).zoomRatio;
                (this.node.parent.getChildByName("drawing_camera").x =
                  this.node.parent.getChildByName("drawing_camera").x -
                  u.x / 1 / p),
                  (this.node.parent.getChildByName("drawing_camera").y =
                    this.node.parent.getChildByName("drawing_camera").y -
                    u.y / 1 / p),
                  (this.node.parent
                    .getChildByName("drawing_camera")
                    .getComponent(cc.Camera).zoomRatio = (p * s) / d);
              }
            },
            onLoad: function () {
              this.node.on(
                cc.Node.EventType.TOUCH_MOVE,
                this.on_touch_move,
                this
              );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    "ui_earth - 001": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c70a55dFY1FVbzY2X6kxjX7", "ui_earth - 001");
        e("item_state"), e("qCount"), e("current_list");
        var a = e("timer"),
          o = e("get_canvas");
        e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            button_box: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this.button_box
              .getChildByName("E1")
              .getChildByName("earth_button").y;
            o.target(this.node);
            if (0 == t)
              for (var n = 1; n <= 7; n++)
                switch (n) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E1")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E2")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E3")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E4")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E5")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E6")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E7")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                }
            else
              for (n = 1; n <= 7; n++)
                switch (n) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E1")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E2")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E3")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E4")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E5")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E6")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E7")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {},
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
      },
    ],
    ui_earth: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "151ef3bT8VJla0Z7YD1QMOE", "ui_earth");
        e("item_state"), e("qCount"), e("current_list");
        var a = e("timer"),
          o = e("get_canvas");
        e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            button_box: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this.button_box
              .getChildByName("E1")
              .getChildByName("earth_button").y;
            o.target(this.node);
            if (((this.button_box.active = !0), 0 == t)) {
              (this.node.getComponent(cc.Button).interactable = !1),
                this.scheduleOnce(function () {
                  this.node.getComponent(cc.Button).interactable = !0;
                }, 6 * 0.1);
              for (var n = 1; n <= 7; n++)
                switch (n) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E1")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E2")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E3")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E4")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E5")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E6")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E7")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth");
                    }, 0.1 * (n - 1));
                }
            } else {
              (this.node.getComponent(cc.Button).interactable = !1),
                this.scheduleOnce(function () {
                  this.node.getComponent(cc.Button).interactable = !0;
                }, 6 * 0.1);
              for (n = 1; n <= 7; n++)
                switch (n) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E1")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E2")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E3")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E4")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E5")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E6")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.button_box
                        .getChildByName("E7")
                        .getChildByName("earth_button")
                        .getComponent(cc.Animation)
                        .play("ui_earth_back");
                    }, 0.07 * (n - 1));
                }
              this.scheduleOnce(function () {}, 6 * 0.07);
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {},
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
      },
    ],
    ui_erase: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3a453BV2/NHfamihSCKExt2", "ui_erase");
        var a = e("item_state"),
          o = e("current_list"),
          c = e("qCount"),
          i = e("timer"),
          s = e("tools_state"),
          r = e("get_canvas");
        cc.Class({
          extends: cc.Component,
          properties: {
            canvas: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = c[o.open];
            s.freeze = 0;
            var n = r
              .target(this.node)
              .getChildByName("top_tools")
              .getChildByName("freeze")
              .getChildByName("Background")
              .getComponent(cc.Sprite);
            if (
              (cc.loader.loadRes("ui_freeze", cc.SpriteFrame, function (e, t) {
                n.spriteFrame = t;
              }),
              o.open > 0)
            ) {
              var i = o.open;
              console.log("test open"),
                console.log(this.canvas.getChildByName("Q" + o.open)),
                console.log(
                  this.canvas
                    .getChildByName("Q" + o.open)
                    .getChildByName("Q1-1")
                ),
                console.log(t);
              for (var l = 1; l <= t; l++)
                switch (l) {
                  case 1:
                    console.log(
                      this.canvas.getChildByName("Q" + i).getChildByName("Q1-1")
                    ),
                      this.scheduleOnce(function () {
                        this.canvas
                          .getChildByName("Q" + i)
                          .getChildByName("Q1-1")
                          .getComponent(cc.Animation)
                          .play("queueA1_back");
                      }, 0.1 * (l - 1));
                    break;
                  case 2:
                    console.log(
                      this.canvas
                        .getChildByName("Q" + o.open)
                        .getChildByName("Q1-2")
                    ),
                      this.scheduleOnce(function () {
                        this.canvas
                          .getChildByName("Q" + i)
                          .getChildByName("Q1-2")
                          .getComponent(cc.Animation)
                          .play("queueA1_back");
                      }, 0.1 * (l - 1));
                    break;
                  case 3:
                    console.log(
                      this.canvas
                        .getChildByName("Q" + o.open)
                        .getChildByName("Q1-3")
                    ),
                      this.scheduleOnce(function () {
                        this.canvas
                          .getChildByName("Q" + i)
                          .getChildByName("Q1-3")
                          .getComponent(cc.Animation)
                          .play("queueA1_back");
                      }, 0.1 * (l - 1));
                    break;
                  case 4:
                    console.log(312314124214),
                      this.scheduleOnce(function () {
                        this.canvas
                          .getChildByName("Q" + i)
                          .getChildByName("Q1-4")
                          .getComponent(cc.Animation)
                          .play("queueA1_back");
                      }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.canvas
                        .getChildByName("Q" + i)
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.canvas
                        .getChildByName("Q" + i)
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.canvas
                        .getChildByName("Q" + i)
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.canvas
                        .getChildByName("Q" + i)
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                }
            }
            (a[0] = 0), (o.open = 0);
            var h = this.node
              .getChildByName("Background")
              .getComponent(cc.Sprite);
            cc.loader.loadRes("ui-erase-on", cc.SpriteFrame, function (e, t) {
              h.spriteFrame = t;
            });
          },
          on_touch_cancel: function (e) {
            i.t2 = i.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        get_canvas: "get_canvas",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
        tools_state: "tools_state",
      },
    ],
    ui_freeze: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0c9bcWio71CRqUpqudOixzh", "ui_freeze");
        e("item_state"), e("current_list");
        var a = e("timer"),
          o = e("tools_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            canvas: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (0 == o.freeze) {
              var t = this.node
                .getChildByName("Background")
                .getComponent(cc.Sprite);
              cc.loader.loadRes(
                "ui_freeze_on",
                cc.SpriteFrame,
                function (e, n) {
                  t.spriteFrame = n;
                }
              ),
                (o.freeze = 1);
            } else {
              t = this.node
                .getChildByName("Background")
                .getComponent(cc.Sprite);
              cc.loader.loadRes("ui_freeze", cc.SpriteFrame, function (e, n) {
                t.spriteFrame = n;
              }),
                (o.freeze = 0);
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        item_state: "item_state",
        timer: "timer",
        tools_state: "tools_state",
      },
    ],
    ui_grid: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "16a98kh4qJPJ6b9SRe5j910", "ui_grid");
        e("get_canvas");
        var a = e("timer"),
          o = ((a = e("timer")), e("new_size")),
          c = e("paper_state");
        e("new_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            this.target.active
              ? (this.target.active = !1)
              : (this.target.active = !0),
              console.log(o.w + "sdfasdfa" + o.h),
              console.log(c.length + "qweqwe" + c[1].length);
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        get_canvas: "get_canvas",
        new_data: "new_data",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    ui_lock: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9b863JOD7BIQ6PwsHYZJxBl", "ui_lock"),
          (t.exports = {
            bottom: 0,
            touch: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    "ui_open-02": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "35ff6mIRD5HJoYA7VyzBEfI", "ui_open-02");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("model_insert"),
            e("delete_earth"),
            e("viewOpen_select")),
          c = e("document_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (JSON.parse(cc.sys.localStorage.getItem("document_gravel"))) {
              this.target.active = !0;
              var t = JSON.parse(
                cc.sys.localStorage.getItem("document_gravel")
              );
              o.val = 0;
              for (var n = this.button, a = 1; a < n.parent.childrenCount; a++)
                n.parent.children[a].destroy();
              for (var i = 1; i < t.length; i++) {
                n = this.button;
                var s = cc.instantiate(this.button);
                (s.parent = n.parent),
                  s.setPosition(0, 0),
                  (s.active = !0),
                  (s
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = t[i]),
                  (s.getChildByName("number").getComponent(cc.Label).string =
                    i),
                  c.name == t[i] &&
                    ((s.getChildByName("Background").color = new cc.Color(
                      209,
                      187,
                      159
                    )),
                    (o.val = i));
              }
              console.log(this.button.parent.children),
                console.log("select" + o.val),
                (n.parent.parent.height = 75 * (t.length - 1) + 100);
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    ui_open_close: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0d0c9YLsWtKTafJvrdLW25i", "ui_open_close");
        e("get_canvas");
        var a = e("timer");
        e("paper_state"),
          e("delete_all"),
          e("item_data"),
          e("item_state"),
          e("model_insert"),
          e("delete_earth");
        cc.Class({
          extends: cc.Component,
          properties: {},
          on_touch_end: function (e) {
            (this.node.parent.active = !1), (a.t2 = a.t2 + 1);
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    ui_open: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "86c62NB98BGuYHdlX2G1h64", "ui_open");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("model_insert"),
            e("delete_earth"),
            e("viewOpen_select")),
          c = e("document_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (
              ((a.t2 = 0),
              JSON.parse(cc.sys.localStorage.getItem("document_gravel")))
            ) {
              this.target.active = !0;
              var t = JSON.parse(
                cc.sys.localStorage.getItem("document_gravel")
              );
              o.val = 0;
              for (var n = this.button, i = 1; i < n.parent.childrenCount; i++)
                n.parent.children[i].destroy();
              for (var s = 1; s < t.length; s++) {
                n = this.button;
                var r = cc.instantiate(this.button);
                (r.parent = n.parent),
                  r.setPosition(0, 0),
                  (r.active = !0),
                  (r
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = t[s]),
                  (r.getChildByName("number").getComponent(cc.Label).string =
                    s),
                  c.name == t[s] &&
                    ((r.getChildByName("Background").color = new cc.Color(
                      209,
                      187,
                      159
                    )),
                    (o.val = s));
              }
              console.log(this.button.parent.children),
                console.log("select" + o.val),
                (n.parent.parent.height = 75 * (t.length - 1) + 100);
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    "ui_save - 001": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3277bePfjpMQ6plqe3NZVkF", "ui_save - 001");
        e("get_canvas");
        var a = e("timer");
        e("paper_state"), e("document_data"), e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {},
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {
            for (var e, t = 0; t < 10; t++)
              for (var n = 0; n < 100; n++)
                for (var a = 0; a < 1; a++) e += "1";
            (this.target.getComponent(cc.RichText).string = "31232141232132"),
              (this.target.getComponent(cc.RichText).string = e),
              console.log(e);
          },
        }),
          cc._RF.pop();
      },
      {
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    ui_save: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d7d26iKUAtFXLWeICi1mX/C", "ui_save");
        e("get_canvas");
        var a = e("timer"),
          o = e("paper_state"),
          c = e("document_data"),
          i = e("earth_state"),
          s = e("new_size");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (
              ((a.t2 = 0),
              cc.sys.localStorage.setItem("file1", JSON.stringify(o)),
              "newfile20191012" == c.name)
            )
              this.target.active = !0;
            else {
              cc.sys.localStorage.setItem(c.name, JSON.stringify(o));
              var t = [];
              t.push(s.w), t.push(s.h), t.push(i[0][0]);
              for (var n = 0; n < s.w; n++)
                for (var r = 0; r < s.h; r++)
                  for (var l = 0; l < 6; l++)
                    if (o[n][r][l])
                      if (l < 4) t.push(o[n][r][l]);
                      else {
                        var h =
                          ("000" + n).substr(-3) +
                          ("000" + r).substr(-3) +
                          l +
                          o[n][r][l];
                        t.push(h);
                      }
              cc.sys.localStorage.setItem(c.name, JSON.stringify(t));
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    ui_scale: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "53c34z5qC5DAKQlrKg9+C/u", "ui_scale");
        var a = e("tools_state");
        cc.Class({
          extends: cc.Component,
          properties: {},
          on_touch_end: function (e) {
            0 == a.scale
              ? ((a.scale = 1),
                (this.node
                  .getChildByName("Background")
                  .getChildByName("Label").color = new cc.Color(218, 18, 18)))
              : ((a.scale = 0),
                (this.node
                  .getChildByName("Background")
                  .getChildByName("Label").color = new cc.Color(252, 162, 78)));
          },
          on_touch_cancel: function (e) {},
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this);
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        tools_state: "tools_state",
      },
    ],
    ui_test: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "196cfB8fqhENqjWhfhqhPlZ", "ui_test");
        var a = e("get_canvas"),
          o = e("timer"),
          c = ((o = e("timer")), e("new_size")),
          i = e("paper_state");
        e("new_data");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            ground_item: {
              default: null,
              type: cc.Prefab,
            },
            ground2: {
              default: null,
              type: cc.SpriteAtlas,
            },
          },
          on_touch_end: function (e) {
            var t = a
                .target(this.node)
                .getChildByName("paper_zoom")
                .getChildByName("paper"),
              n = new Date(),
              s = n.getTime();
            console.log("success!!!!!!!!!!!" + s + "-" + n.getTime());
            for (var r = 0; r < c.w; r++)
              for (var l = 0; l < c.h; l++) {
                var h = t.getChildByName(i[r][l][0]).getComponent(cc.Sprite),
                  d = this.ground2.getSpriteFrame("783");
                h.spriteFrame = d;
              }
            var u = n.getTime() - s;
            console.log("success!!!!!!!!!!!" + u + "-" + n.getTime()),
              (o.t2 = s);
          },
          on_touch_cancel: function (e) {},
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        get_canvas: "get_canvas",
        new_data: "new_data",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
      },
    ],
    viewOpen_select: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "5ec7eh9EmZNjLS6QJ6xHntD", "viewOpen_select"),
          (t.exports = {
            val: 0,
          }),
          cc._RF.pop();
      },
      {},
    ],
    "view_copy - 001": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6f7f68uqFBB1JnpEPpJ8PZE", "view_copy - 001");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("model_insert"),
            e("viewOpen_select"));
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (0 !== o.val) {
              var t = JSON.parse(
                  cc.sys.localStorage.getItem("document_gravel")
                ),
                n = this.target.children[o.val]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string;
              t.splice(o.val + 1, 0, n),
                cc.sys.localStorage.setItem(
                  "document_gravel",
                  JSON.stringify(t)
                ),
                console.log(t);
              for (var a = this.button, c = 1; c < a.parent.childrenCount; c++)
                a.parent.children[c].destroy();
              for (var i = 1; i < t.length; i++) {
                a = this.button;
                var s = cc.instantiate(this.button);
                (s.parent = a.parent),
                  s.setPosition(0, 0),
                  (s.active = !0),
                  (s
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = t[i]),
                  (s.getChildByName("number").getComponent(cc.Label).string =
                    i);
              }
              console.log(this.button.parent.children),
                console.log("select" + o.val),
                (a.parent.parent.height = 75 * (t.length - 1) + 100);
            }
          },
          on_touch_cancel: function (e) {
            a.t2 = a.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    view_copy: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "74477gP0dRKcbDDZ4AhiY3Z", "view_copy");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("model_insert"),
            e("viewOpen_select"));
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            if (0 !== o.val) {
              var t = JSON.parse(
                  cc.sys.localStorage.getItem("document_gravel")
                ),
                n = this.target.children[o.val]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string,
                a = JSON.parse(cc.sys.localStorage.getItem(n)),
                c = JSON.parse(cc.sys.localStorage.getItem(n + "data"));
              for (n += "-copy"; JSON.parse(cc.sys.localStorage.getItem(n)); )
                n += "-copy";
              cc.sys.localStorage.setItem(n, JSON.stringify(a)),
                cc.sys.localStorage.setItem(n + "data", JSON.stringify(c)),
                t.splice(o.val + 1, 0, n),
                cc.sys.localStorage.setItem(
                  "document_gravel",
                  JSON.stringify(t)
                ),
                console.log(t);
              for (var i = this.button, s = 1; s < i.parent.childrenCount; s++)
                i.parent.children[s].destroy();
              for (var r = 1; r < t.length; r++) {
                i = this.button;
                var l = cc.instantiate(this.button);
                (l.parent = i.parent),
                  l.setPosition(0, 0),
                  (l.active = !0),
                  (l
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = t[r]),
                  (l.getChildByName("number").getComponent(cc.Label).string =
                    r);
              }
              console.log(this.button.parent.children),
                console.log("select" + o.val),
                (i.parent.parent.height = 75 * (t.length - 1) + 100),
                (o.val = 0);
            }
          },
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name &&
              (a.t2 = a.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    view_delete: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e106d0d4GFPFKbvP9YSWHua", "view_delete");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("change_storage_key"),
            e("viewOpen_select"));
        cc.Class({
          extends: cc.Component,
          properties: {
            layout: {
              default: null,
              type: cc.Node,
            },
            txt: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
            view: {
              default: null,
              type: cc.Node,
            },
          },
          on: function (e) {
            this.node.active = !0;
          },
          enter: function (e) {
            console.log(o.val);
            var t = JSON.parse(cc.sys.localStorage.getItem("document_gravel"));
            if (0 !== o.val) {
              var n = t[o.val];
              cc.sys.localStorage.removeItem(n),
                cc.sys.localStorage.removeItem(n + "data"),
                t.splice(o.val, 1),
                cc.sys.localStorage.setItem(
                  "document_gravel",
                  JSON.stringify(t)
                ),
                (o.val = 0);
            }
            if (JSON.parse(cc.sys.localStorage.getItem("document_gravel"))) {
              for (var a = this.button, c = 1; c < a.parent.childrenCount; c++)
                a.parent.children[c].destroy();
              for (var i = 1; i < t.length; i++) {
                a = this.button;
                var s = cc.instantiate(this.button);
                (s.parent = a.parent),
                  s.setPosition(0, 0),
                  (s.active = !0),
                  (s
                    .getChildByName("Background")
                    .getChildByName("Label")
                    .getComponent(cc.Label).string = t[i]),
                  (s.getChildByName("number").getComponent(cc.Label).string =
                    i),
                  i == o.val &&
                    ((s.getChildByName("Background").color = new cc.Color(
                      209,
                      187,
                      159
                    )),
                    (o.val = i));
              }
              console.log(this.button.parent.children),
                console.log("select" + o.val),
                (a.parent.parent.height = 75 * (t.length - 1) + 100),
                (this.node.active = !1);
            }
            console.log(o.val);
          },
          on_touch_end: function (e) {},
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name &&
              (a.t2 = a.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        change_storage_key: "change_storage_key",
        delete_all: "delete_all",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    "view_open-02": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c427d5pk0tP4pohwIls09Wm", "view_open-02");
        var a = e("get_canvas"),
          o = e("timer"),
          c = e("paper_state"),
          i = e("delete_all"),
          s = e("delete_earth"),
          r = e("item_data"),
          l = (e("item_state"), e("model_insert")),
          h = e("viewOpen_select"),
          d = e("document_data"),
          u = e("new_size");
        e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            progress: cc.ProgressBar,
            text: cc.Label,
            view: {
              default: null,
              type: cc.Node,
            },
            ground: {
              default: null,
              type: cc.Node,
            },
            paper: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this;
            if (
              "open" == cc.director.getScene().name.substr(0, 4) &&
              0 !== h.val
            ) {
              var n = h.val,
                p = this.target.children[n]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string;
              if (
                "string" !=
                typeof (C = JSON.parse(cc.sys.localStorage.getItem(p)))[2]
              ) {
                var _ = JSON.parse(cc.sys.localStorage.getItem(p + "data"));
                (d.name = p),
                  (u.w = _.w),
                  console.log(u.w),
                  (u.h = _.h),
                  console.log(u.h);
              } else (d.name = p), (u.w = C[0]), (u.h = C[1]);
              (this.view.active = !0),
                (this.text.string = "0%"),
                (this.progress.progress = 0),
                cc.director.preloadScene(
                  "workpaper" +
                    cc.director
                      .getScene()
                      .name.substr(4, cc.director.getScene().name.length - 4),
                  function (e, n, a) {
                    var o = e / n;
                    (t.progress.progress = o),
                      (t.text.string = parseInt(100 * o) + "%"),
                      console.log(t.text.string);
                  },
                  function () {
                    cc.director.loadScene(
                      "workpaper" +
                        cc.director
                          .getScene()
                          .name.substr(
                            4,
                            cc.director.getScene().name.length - 4
                          )
                    );
                  }
                );
            }
            if (
              "workpaper" == cc.director.getScene().name.substr(0, 9) &&
              0 !== h.val
            ) {
              var m = a.target(this.node),
                g = m.getChildByName("paper_zoom").getChildByName("paper");
              console.log(h);
              var C;
              (n = h.val),
                (p = this.target.children[n]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string);
              if (
                "string" !=
                typeof (C = JSON.parse(cc.sys.localStorage.getItem(p)))[2]
              ) {
                _ = JSON.parse(cc.sys.localStorage.getItem(p + "data"));
                (u.w = _.w),
                  (u.h = _.h),
                  (this.paper.width = 100 * _.w),
                  (this.paper.height = 100 * _.h),
                  (this.paper.getChildByName("ground").width = 100 * _.w),
                  (this.paper.getChildByName("ground").height = 100 * _.h),
                  (this.paper.getChildByName("grid").width = 100 * _.w),
                  (this.paper.getChildByName("grid").height = 100 * _.h),
                  (d.name = p);
                var y = JSON.parse(
                    cc.sys.localStorage.getItem(p + "data")
                  ).earth,
                  f = this.ground.getComponent(cc.Sprite);
                cc.loader.loadRes(y, cc.SpriteFrame, function (e, t) {
                  f.spriteFrame = t;
                });
                for (var v = 0; v < 100; v++)
                  for (var N = 0; N < 100; N++) {
                    i.location(v, N, g), s.location(v, N, g);
                    for (var b = 0; b < 6; b++)
                      if (C[v][N][b])
                        if (b < 4) {
                          var B = C[v][N][b].substr(6, 3);
                          (c[v][N][b] =
                            ("000" + v).substr(-3) +
                            ("000" + N).substr(-3) +
                            b +
                            B),
                            console.log(B),
                            console.log(r[B][0]);
                          var w = 1e4 * r[B][0] - (99 - v + 100 * N) - 1;
                          l.data(v, N, c[v][N][b], w, g, B);
                        } else c[v][N][b] = C[v][N][b];
                  }
              } else {
                (u.w = C[0]),
                  (u.h = C[1]),
                  (this.paper.width = 100 * u.w),
                  (this.paper.height = 100 * u.h),
                  (this.paper.getChildByName("ground").width = 100 * u.w),
                  (this.paper.getChildByName("ground").height = 100 * u.h),
                  (this.paper.getChildByName("grid").width = 100 * u.w),
                  (this.paper.getChildByName("grid").height = 100 * u.h),
                  (d.name = p);
                (y = C[2]), (f = this.ground.getComponent(cc.Sprite));
                cc.loader.loadRes(y, cc.SpriteFrame, function (e, t) {
                  f.spriteFrame = t;
                });
                for (v = 0; v < 100; v++)
                  for (N = 0; N < 100; N++)
                    i.location(v, N, g), s.location(v, N, g);
                for (var O = 3; O < C.length; O++) {
                  var x = C[O].substr(6, 1),
                    A = parseInt(C[O].substr(0, 3)),
                    F = parseInt(C[O].substr(3, 3));
                  if (x < 4) {
                    c[A][F][x] = C[O];
                    w = 1e4 * x - (99 - A + 100 * F) - 1;
                    (B = C[O].substr(7, C[O].length - 7)),
                      l.data(A, F, C[O], w, g, B);
                  } else c[A][F][x] = C[O].substr(7, C[O].length - 7);
                }
              }
              (m.getChildByName("save_view").active = !1), (o.t2 = o.t2 + 1);
            }
          },
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name &&
              (o.t2 = o.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    "view_open-03": [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "74cceAAOPxE05rZzRjOCtRF", "view_open-03");
        var a = e("get_canvas"),
          o = e("timer"),
          c = e("paper_state"),
          i = e("delete_all"),
          s = e("delete_earth"),
          r = e("item_data"),
          l = (e("item_state"), e("model_insert")),
          h = e("viewOpen_select"),
          d = e("document_data"),
          u = e("new_size");
        e("earth_state");
        cc.Class({
          extends: cc.Component,
          properties: {
            target: {
              default: null,
              type: cc.Node,
            },
            progress: cc.ProgressBar,
            text: cc.Label,
            view: {
              default: null,
              type: cc.Node,
            },
            ground: {
              default: null,
              type: cc.Node,
            },
            paper: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this;
            if ("open" == cc.director.getScene().name && 0 !== h.val) {
              var n = h.val,
                p = this.target.children[n]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string,
                _ = JSON.parse(cc.sys.localStorage.getItem(p + "data"));
              (d.name = p),
                (this.view.active = !0),
                (u.w = _.w),
                console.log(u.w),
                (u.h = _.h),
                console.log(u.h),
                (this.text.string = "0%"),
                (this.progress.progress = 0),
                cc.director.preloadScene(
                  "workpaper",
                  function (e, n, a) {
                    var o = e / n;
                    (t.progress.progress = o),
                      (t.text.string = parseInt(100 * o) + "%"),
                      console.log(t.text.string);
                  },
                  function () {
                    cc.director.loadScene("workpaper");
                  }
                );
            }
            if ("workpaper" == cc.director.getScene().name && 0 !== h.val) {
              var m = a.target(this.node),
                g = m.getChildByName("paper_zoom").getChildByName("paper");
              console.log(h);
              (n = h.val),
                (p = this.target.children[n]
                  .getChildByName("Background")
                  .getChildByName("Label")
                  .getComponent(cc.Label).string);
              var C = JSON.parse(cc.sys.localStorage.getItem(p));
              _ = JSON.parse(cc.sys.localStorage.getItem(p + "data"));
              console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrr" + _.w),
                console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrr" + _.h),
                (this.paper.width = 100 * _.w),
                (this.paper.height = 100 * _.h),
                (this.paper.getChildByName("ground").width = 100 * _.w),
                (this.paper.getChildByName("ground").height = 100 * _.h),
                (this.paper.getChildByName("grid").width = 100 * _.w),
                (this.paper.getChildByName("grid").height = 100 * _.h),
                console.log(C),
                (d.name = p);
              var y = JSON.parse(cc.sys.localStorage.getItem(p + "data")).earth,
                f = this.ground.getComponent(cc.Sprite);
              cc.loader.loadRes(y, cc.SpriteFrame, function (e, t) {
                f.spriteFrame = t;
              });
              for (var v = 0; v < 100; v++)
                for (var N = 0; N < 100; N++) {
                  i.location(v, N, g), s.location(v, N, g);
                  for (var b = 0; b < 5; b++)
                    if (C[v][N][b] && ((c[v][N][b] = C[v][N][b]), 4 !== b)) {
                      var B = C[v][N][b].substr(6, 3);
                      console.log(B), console.log(r[B][0]);
                      var w = 1e4 * r[B][0] - (99 - v + 100 * N) - 1;
                      l.data(v, N, C[v][N][b], w, g, B);
                    }
                }
              (m.getChildByName("save_view").active = !1), (o.t2 = o.t2 + 1);
            }
          },
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name &&
              (o.t2 = o.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        delete_earth: "delete_earth",
        document_data: "document_data",
        earth_state: "earth_state",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        model_insert: "model_insert",
        new_size: "new_size",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    view_open: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9ebbdDzD9hAapcI2kpJs/Ez", "view_open");
        var a = e("item_state"),
          o = e("qCount"),
          c = e("current_list"),
          i = e("timer"),
          s = e("get_canvas");
        cc.Class({
          extends: cc.Component,
          properties: {
            queueList: {
              default: null,
              type: cc.Node,
            },
          },
          on_touch_end: function (e) {
            var t = this.queueList.getChildByName("Q1-1").x,
              n = parseInt(this.node.name.substr(7, 1));
            a[0] = a[n];
            var i = s.target(this.node);
            console.log(i),
              console.log(s.target(this.node).getChildByName("top_tools"));
            var r = i
              .getChildByName("top_tools")
              .getChildByName("erase")
              .getChildByName("Background")
              .getComponent(cc.Sprite);
            console.log(r),
              cc.loader.loadRes("ui-erase", cc.SpriteFrame, function (e, t) {
                r.spriteFrame = t;
              });
            var l = o[n];
            if (c.open > 0) var h = o[c.open];
            var d = c.open;
            if ((console.log(l), t <= -1700)) {
              (c.open = n), console.log("current_list.open:" + c.open);
              for (var u = 1; u <= l; u++)
                switch (u) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (u - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (u - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.1 * (u - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1");
                    }, 0.15);
                }
              for (u = 1; u <= h; u++)
                switch (u) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList.parent
                        .getChildByName("Q" + d)
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                }
            } else {
              (c.open = 0),
                console.log("cancel"),
                console.log("current_list.open:" + c.open);
              for (u = l; u > 0; u--)
                switch (u) {
                  case 1:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-1")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 2:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-2")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 3:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-3")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.1 * (u - 1));
                    break;
                  case 4:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-4")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.25);
                    break;
                  case 5:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-5")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                    break;
                  case 6:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-6")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.05);
                    break;
                  case 7:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-7")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.08);
                    break;
                  case 8:
                    this.scheduleOnce(function () {
                      this.queueList
                        .getChildByName("Q1-8")
                        .getComponent(cc.Animation)
                        .play("queueA1_back");
                    }, 0.15);
                }
              c.open = 0;
            }
            console.log(a[0]);
          },
          on_touch_cancel: function (e) {
            i.t2 = i.t2 + 1;
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        current_list: "current_list",
        get_canvas: "get_canvas",
        item_state: "item_state",
        qCount: "qCount",
        timer: "timer",
      },
    ],
    view_rename: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fd7465f9/BMr4Z+vAQWiPjc", "view_rename");
        e("get_canvas");
        var a = e("timer"),
          o =
            (e("paper_state"),
            e("delete_all"),
            e("item_data"),
            e("item_state"),
            e("change_storage_key")),
          c = e("viewOpen_select");
        cc.Class({
          extends: cc.Component,
          properties: {
            layout: {
              default: null,
              type: cc.Node,
            },
            txt: {
              default: null,
              type: cc.Node,
            },
            button: {
              default: null,
              type: cc.Node,
            },
            view: {
              default: null,
              type: cc.Node,
            },
          },
          on: function (e) {
            0 !== c.val && (this.node.active = !0);
          },
          enter: function (e) {
            var t = this.txt.getComponent(cc.Label).string;
            if (JSON.parse(cc.sys.localStorage.getItem(t)))
              (this.node.getChildByName("back").active = !0),
                (this.node.getChildByName("save_EditBox").active = !1);
            else {
              this.node.active = !1;
              var n = JSON.parse(
                  cc.sys.localStorage.getItem("document_gravel")
                ),
                a = n[c.val];
              if (
                (n.splice(c.val, 1, t),
                cc.sys.localStorage.setItem(
                  "document_gravel",
                  JSON.stringify(n)
                ),
                o.data(a, t),
                o.data(a + "data", t + "data"),
                JSON.parse(cc.sys.localStorage.getItem("document_gravel")))
              ) {
                for (
                  var i = this.button, s = 1;
                  s < i.parent.childrenCount;
                  s++
                )
                  i.parent.children[s].destroy();
                for (var r = 1; r < n.length; r++) {
                  i = this.button;
                  var l = cc.instantiate(this.button);
                  (l.parent = i.parent),
                    l.setPosition(0, 0),
                    (l.active = !0),
                    (l
                      .getChildByName("Background")
                      .getChildByName("Label")
                      .getComponent(cc.Label).string = n[r]),
                    (l.getChildByName("number").getComponent(cc.Label).string =
                      r),
                    r == c.val &&
                      ((l.getChildByName("Background").color = new cc.Color(
                        209,
                        187,
                        159
                      )),
                      (c.val = r));
                }
                console.log(this.button.parent.children),
                  console.log("select" + c.val),
                  (i.parent.parent.height = 75 * (n.length - 1) + 100);
              }
            }
          },
          on_touch_end: function (e) {
            o.data("eeeeee", "bbbb"),
              console.log(cc.sys.localStorage.getItem("bbbb")),
              console.log(cc.sys.localStorage.getItem("eeeeee"));
          },
          on_touch_cancel: function (e) {
            "workpaper" == cc.director.getRunningScene().name &&
              (a.t2 = a.t2 + 1);
          },
          onLoad: function () {
            this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this),
              this.node.on(
                cc.Node.EventType.TOUCH_CANCEL,
                this.on_touch_cancel,
                this
              );
          },
          start: function () {},
        }),
          cc._RF.pop();
      },
      {
        change_storage_key: "change_storage_key",
        delete_all: "delete_all",
        get_canvas: "get_canvas",
        item_data: "item_data",
        item_state: "item_state",
        paper_state: "paper_state",
        timer: "timer",
        viewOpen_select: "viewOpen_select",
      },
    ],
    water_to_item: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ffdbdul80hDq55qvcdfVCeH", "water_to_item");
        e("paper_state"), e("delete_all"), e("item_data");
        var a = {
          target: function (e) {
            var t = e % 2,
              n = e % 3,
              a = e % 5,
              o = e % 7,
              c = e % 11,
              i = e % 13,
              s = e % 17,
              r = e % 19;
            return (
              console.log(),
              (e = 118),
              0 !== t && 0 !== n && 0 !== a && 0 !== o && (e = 118),
              0 == t && 0 !== n && 0 !== a && 0 !== o && (e = 119),
              0 !== t && 0 == n && 0 !== a && 0 !== o && (e = 120),
              0 !== t && 0 !== n && 0 == a && 0 !== o && (e = 121),
              0 !== t && 0 !== n && 0 !== a && 0 == o && (e = 122),
              0 == t && 0 !== n && 0 == a && 0 !== o && (e = 123),
              0 !== t && 0 == n && 0 !== a && 0 == o && (e = 124),
              0 == t && 0 == n && 0 !== a && 0 !== o && 0 !== c && (e = 125),
              0 !== t && 0 == n && 0 == a && 0 !== o && 0 !== i && (e = 126),
              0 !== t && 0 !== n && 0 == a && 0 == o && 0 !== s && (e = 127),
              0 == t && 0 !== n && 0 !== a && 0 == o && 0 !== r && (e = 128),
              0 == t && 0 == n && 0 !== a && 0 !== o && 0 == c && (e = 129),
              0 !== t && 0 == n && 0 == a && 0 !== o && 0 == i && (e = 130),
              0 !== t && 0 !== n && 0 == a && 0 == o && 0 == s && (e = 131),
              0 == t && 0 !== n && 0 !== a && 0 == o && 0 == r && (e = 132),
              0 == t &&
                0 == n &&
                0 == a &&
                0 !== o &&
                0 !== c &&
                0 !== i &&
                (e = 133),
              0 !== t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== i &&
                0 !== s &&
                (e = 134),
              0 == t &&
                0 !== n &&
                0 == a &&
                0 == o &&
                0 !== s &&
                0 !== r &&
                (e = 135),
              0 == t &&
                0 == n &&
                0 !== a &&
                0 == o &&
                0 !== r &&
                0 !== c &&
                (e = 136),
              0 == t &&
                0 == n &&
                0 == a &&
                0 !== o &&
                0 == c &&
                0 !== i &&
                (e = 137),
              0 !== t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == i &&
                0 !== s &&
                (e = 138),
              0 == t &&
                0 !== n &&
                0 == a &&
                0 == o &&
                0 == s &&
                0 !== r &&
                (e = 139),
              0 == t &&
                0 == n &&
                0 !== a &&
                0 == o &&
                0 == r &&
                0 !== c &&
                (e = 140),
              0 == t &&
                0 == n &&
                0 == a &&
                0 !== o &&
                0 !== c &&
                0 == i &&
                (e = 141),
              0 !== t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== i &&
                0 == s &&
                (e = 142),
              0 == t &&
                0 !== n &&
                0 == a &&
                0 == o &&
                0 !== s &&
                0 == r &&
                (e = 143),
              0 == t &&
                0 == n &&
                0 !== a &&
                0 == o &&
                0 !== r &&
                0 == c &&
                (e = 144),
              0 == t &&
                0 == n &&
                0 == a &&
                0 !== o &&
                0 == c &&
                0 == i &&
                (e = 145),
              0 !== t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == i &&
                0 == s &&
                (e = 146),
              0 == t &&
                0 !== n &&
                0 == a &&
                0 == o &&
                0 == s &&
                0 == r &&
                (e = 147),
              0 == t &&
                0 == n &&
                0 !== a &&
                0 == o &&
                0 == r &&
                0 == c &&
                (e = 148),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 !== i &&
                0 !== s &&
                0 !== r &&
                (e = 149),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 !== i &&
                0 !== s &&
                0 !== r &&
                (e = 150),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 == i &&
                0 !== s &&
                0 !== r &&
                (e = 151),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 !== i &&
                0 == s &&
                0 !== r &&
                (e = 152),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 !== i &&
                0 !== s &&
                0 == r &&
                (e = 153),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 == i &&
                0 !== s &&
                0 !== r &&
                (e = 154),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 == i &&
                0 == s &&
                0 !== r &&
                (e = 155),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 !== i &&
                0 == s &&
                0 == r &&
                (e = 156),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 !== i &&
                0 !== s &&
                0 == r &&
                (e = 157),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 == i &&
                0 !== s &&
                0 == r &&
                (e = 158),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 !== i &&
                0 == s &&
                0 !== r &&
                (e = 159),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 == i &&
                0 == s &&
                0 !== r &&
                (e = 160),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 !== c &&
                0 == i &&
                0 == s &&
                0 == r &&
                (e = 161),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 !== i &&
                0 == s &&
                0 == r &&
                (e = 162),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 == i &&
                0 !== s &&
                0 == r &&
                (e = 163),
              0 == t &&
                0 == n &&
                0 == a &&
                0 == o &&
                0 == c &&
                0 == i &&
                0 == s &&
                0 == r &&
                (e = 164),
              e
            );
          },
        };
        (t.exports = a), cc._RF.pop();
      },
      {
        delete_all: "delete_all",
        item_data: "item_data",
        paper_state: "paper_state",
      },
    ],
    ztest: [
      function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e26abU/Hz9Ny4xiKQNlhpu4", "ztest"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {
              console.log(cc.macro.MIN_ZINDEX),
                console.log(cc.macro.MAX_ZINDEX);
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
  },
  {},
  [
    "helloToOpen",
    "home",
    "label_sub_new",
    "label_sub_old",
    "loading",
    "move",
    "new_size",
    "save - 001",
    "save",
    "save_view_on",
    "slide_set",
    "slide_set_bk",
    "slider",
    "start_button",
    "testlog",
    "ButtonSafe",
    "NewScript",
    "Z2+1",
    "altas_list",
    "bridge_to_item",
    "button_1",
    "button_2",
    "button_queue",
    "canvas_move",
    "change_bridge",
    "change_storage_key",
    "change_sub_bridge",
    "change_water",
    "change_water_name",
    "close_open",
    "create_document_list",
    "create_pic",
    "current_list",
    "delete_all",
    "delete_earth",
    "document_data",
    "drawing_insert",
    "earth_button",
    "earth_state",
    "get_bridge_envir",
    "get_canvas",
    "get_water_envir",
    "initialization",
    "item_data",
    "item_state",
    "loading_earth",
    "model_change_name",
    "model_change_pic",
    "model_insert",
    "model_insert_pro",
    "model_photo - -",
    "model_photo - 001",
    "model_photo",
    "new_data",
    "openView_button",
    "paper_move",
    "paper_move_002",
    "paper_other_state",
    "paper_state",
    "photos",
    "qCount",
    "save_data",
    "testa",
    "textureRenderUtils",
    "this_active_false",
    "timer",
    "tools_state",
    "touch_lock",
    "touch_move",
    "ui_earth - 001",
    "ui_earth",
    "ui_erase",
    "ui_freeze",
    "ui_grid",
    "ui_lock",
    "ui_open-02",
    "ui_open",
    "ui_open_close",
    "ui_save - 001",
    "ui_save",
    "ui_scale",
    "ui_test",
    "viewOpen_select",
    "view_copy - 001",
    "view_copy",
    "view_delete",
    "view_open-02",
    "view_open-03",
    "view_open",
    "view_rename",
    "water_to_item",
    "ztest",
  ]
);
