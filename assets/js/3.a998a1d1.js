(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{360:function(t,a,s){t.exports=s.p+"assets/img/macrecovery.af5c41c1.png"},361:function(t,a,s){t.exports=s.p+"assets/img/download-done.05d30da0.png"},371:function(t,a,s){t.exports=s.p+"assets/img/format-usb.83a24b13.png"},502:function(t,a,s){t.exports=s.p+"assets/img/gib.b3fe2322.png"},503:function(t,a,s){t.exports=s.p+"assets/img/gib-process.c5982045.png"},504:function(t,a,s){t.exports=s.p+"assets/img/final-download.3c533738.png"},505:function(t,a,s){t.exports=s.p+"assets/img/install-pkg.f47a1e5c.png"},506:function(t,a,s){t.exports=s.p+"assets/img/done.d6ea4a58.png"},507:function(t,a,s){t.exports=s.p+"assets/img/gib-location.8afc21af.png"},508:function(t,a,s){t.exports=s.p+"assets/img/gib-done.28275135.png"},509:function(t,a,s){t.exports=s.p+"assets/img/unsupported.679e01e6.png"},510:function(t,a,s){t.exports=s.p+"assets/img/mount.d471affc.png"},511:function(t,a,s){t.exports=s.p+"assets/img/fat32-erase.d4148162.png"},512:function(t,a,s){t.exports=s.p+"assets/img/dmg-chunklist.c22cb668.png"},513:function(t,a,s){t.exports=s.p+"assets/img/pre-restore.7cbd2b4d.png"},514:function(t,a,s){t.exports=s.p+"assets/img/restore.4a8e8078.png"},515:function(t,a,s){t.exports=s.p+"assets/img/sip-fail.f3b6ef3b.png"},516:function(t,a,s){t.exports=s.p+"assets/img/download.974b60da.png"},517:function(t,a,s){t.exports=s.p+"assets/img/boot-disk.73bf04f5.png"},518:function(t,a,s){t.exports=s.p+"assets/img/boot-done.48b57b22.png"},519:function(t,a,s){t.exports=s.p+"assets/img/efi-base.2af0e24a.png"},520:function(t,a,s){t.exports=s.p+"assets/img/mount-efi-usb.c855475e.png"},521:function(t,a,s){t.exports=s.p+"assets/img/base-efi.3b1f0304.png"},633:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"在-macos-中创建安装器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-中创建安装器"}},[t._v("#")]),t._v(" 在 macOS 中创建安装器")]),t._v(" "),e("ul",[e("li",[t._v("支持的版本：0.6.4")])]),t._v(" "),e("p",[t._v("虽然你不需要进行一次完全重新安装以使用 OpenCore，但是建议一些用户对他们的引导管理器升级进行完全的重新安排。")]),t._v(" "),e("p",[t._v("我们将会以获得一份 macOS 副本为开始。如果你只是想制作一个 OpenCore 启动盘，你可以跳过这个部分并跳转到格式化 USB。对其他的人，你可以从 App Store 下载 macOS 或者使用 gibMacOS。")]),t._v(" "),e("h2",{attrs:{id:"下载-macos-较新版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-macos-较新版本"}},[t._v("#")]),t._v(" 下载 macOS：较新版本")]),t._v(" "),e("ul",[e("li",[t._v("这个方式允许你下载 macOS 10.13 和更高版本，对于 10.12 和更低版本请查看"),e("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BD-macos-%E7%BB%8F%E5%85%B8%E7%89%88%E6%9C%AC"}},[t._v("下载 macOS：经典版本")])])]),t._v(" "),e("p",[t._v("在一台安装了 macOS 的设备上，获取你想要安装的 macOS 版本，只需直接进入 App Store 并下载想要的操作系统发行版，然后继续查看 "),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%AE%89%E8%A3%85%E5%99%A8"}},[e("strong",[t._v("创建安装器")])]),t._v("。")]),t._v(" "),e("p",[t._v("如果需要明确的操作系统发行版，或者无法从 App Store 下载，你可以使用实用工具 gibMacOS。")]),t._v(" "),e("p",[t._v("那么现在我们来获取 "),e("a",{attrs:{href:"https://github.com/corpnewt/gibMacOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("gibMacOS"),e("OutboundLink")],1),t._v("，然后将它提取到一个本地的目录。")]),t._v(" "),e("p",[t._v("然后运行 "),e("code",[t._v("gibMacOS.command")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(502),alt:""}})]),t._v(" "),e("p",[t._v("就如你所看到的一样，我们获得了 macOS 安装器的一个优质列表。如果你需要测试版的 macOS，你可以选择 "),e("code",[t._v("C. Change Catalog")]),t._v("。在这个示例中我们将选择 1：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(503),alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("macOS 11 Big Sur 注意事项")]),t._v("：因为这个操作系统太新了，依然有一些确定的问题需要系统来解决。对于更多的信息，参阅此处："),e("RouterLink",{attrs:{to:"/extras/big-sur/"}},[t._v("OpenCore 和 macOS 11：Big Sur")]),t._v(" "),e("ul",[e("li",[t._v("对于第一次使用的用户，我们推荐 10.15 Catalina")])])],1),t._v(" "),e("li",[e("strong",[t._v("Nvidia 显卡注意事项")]),t._v("：记得确认你的硬件是否支持较新的操作系统，请参阅"),e("RouterLink",{attrs:{to:"/macos-limits.html"}},[t._v("硬件限制")])],1)]),t._v(" "),e("p",[t._v("这会需要一定的时间，因为我们正在下载总共 8GB+ 的 macOS 安裝程序，所以强烈推荐在你等待的时候阅读剩下的指南。")]),t._v(" "),e("p",[t._v("一旦完成，我们必须提取安装程序或者构建它：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E6%8F%90%E5%8F%96%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F"}},[t._v("提取安装程序")]),t._v(" "),e("ul",[e("li",[t._v("对于 macOS 11+")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%9E%84%E5%BB%BA%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F"}},[t._v("构建安装程序")]),t._v(" "),e("ul",[e("li",[t._v("对于 10.15 和更低版本")])])])]),t._v(" "),e("h3",{attrs:{id:"提取安装程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提取安装程序"}},[t._v("#")]),t._v(" 提取安装程序")]),t._v(" "),e("p",[t._v("对于 macOS 11 和更高版本，Apple 现在将安装器打包在了 InstallAssistant（安装助理）包中。它会位于 "),e("code",[t._v("gibMacOS/macOS Downloads/")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(504),alt:""}})]),t._v(" "),e("p",[t._v("运行 InstallAssistant.pkg 然后选择你要用于启动的驱动器，这将是 Install.app 被放置到的位置：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(505),alt:""}})]),t._v(" "),e("p",[t._v("一旦完成，你应该可以在你的应用程序目录中找到它：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(506),alt:""}})]),t._v(" "),e("p",[t._v("这样就可以跳转至"),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%AE%89%E8%A3%85%E5%99%A8"}},[t._v("创建安装器")]),t._v("以完成你的工作了。")]),t._v(" "),e("h3",{attrs:{id:"构建安装程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建安装程序"}},[t._v("#")]),t._v(" 构建安装程序")]),t._v(" "),e("p",[t._v("对于 macOS 10.15 和更低版本，安装器将会被作为多个部分下载，所以需要被构建。此处我们需要运行 "),e("code",[t._v("BuildmacOSInstallApp.command")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(507),alt:""}})]),t._v(" "),e("p",[t._v("程序将会提示您放入已经下载到 gibMacOS 目录中的 "),e("code",[t._v("macOS Downloads")]),t._v(" 下的文件。")]),t._v(" "),e("p",[t._v("在访达中，进入下载了文件的目录然后把它拖放到命令行中，或者“Cmd+C”并将它粘贴至终端内。")]),t._v(" "),e("p",[t._v("一旦任务完成，退出这个实用工具。你将会在目录中找到安装文件。")]),t._v(" "),e("p",[t._v("将新构建的安装程序移动到应用程序目录——这将简化下一个部分。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(508),alt:""}})]),t._v(" "),e("p",[t._v("这样就可以跳转至"),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%AE%89%E8%A3%85%E5%99%A8"}},[t._v("创建安装器")]),t._v("以完成你的工作了。")]),t._v(" "),e("h2",{attrs:{id:"下载-macos-经典版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-macos-经典版本"}},[t._v("#")]),t._v(" 下载 macOS：经典版本")]),t._v(" "),e("ul",[e("li",[t._v("此方式允许你下载很多的旧版本 OS X，当前支持所有 OS X 的英特尔版本（10.4 至当前版本）")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("获取经典版本的 macOS：离线方式（支持 10.10-10.12）")]),t._v(" "),e("h3",{attrs:{id:"经典版本-macos-离线方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#经典版本-macos-离线方式"}},[t._v("#")]),t._v(" 经典版本 macOS：离线方式")]),t._v(" "),e("p",[t._v("此方式允许我们从 Apple 下载完整的安装器，但是限制到了 10.10 Yosemite，所以更旧的操作系统需要通过下方提到的“在线方式”获取。")]),t._v(" "),e("p",[t._v("跳转到下方的其中一个链接以开始：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://support.apple.com/en-ca/HT210717",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to OS X Yosemite"),e("OutboundLink")],1),t._v("（如何升级到 OS X Yosemite）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://support.apple.com/en-us/HT206886",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to OS X El Capitan"),e("OutboundLink")],1),t._v("（如何升级到 OS X EI Capitan）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://support.apple.com/en-us/HT208202",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to upgrade to macOS Sierra"),e("OutboundLink")],1),t._v("（如何升级到 macOS Sierra）")])]),t._v(" "),e("blockquote",[e("p",[t._v("译者注：上方链接页面暂时只有英文版本。如果您想获得中文文档，请点击"),e("a",{attrs:{href:"https://support.apple.com/zh-cn/HT211683",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。但是，中文版本的页面可能与英文版本有一些出入。")])]),t._v(" "),e("p",[t._v("在第 4 步中，你将会看到 Sierra 的 "),e("code",[t._v("InstallOS.dmg")]),t._v(" 或 EI Capitan 及更旧操作系统的 "),e("code",[t._v("InstallMacOSX.dmg")]),t._v("。下载你需要的版本，一个 .pkg 文件将会提供给你。")]),t._v(" "),e("p",[t._v("取决于你在什么操作系统中，你可以运行脚本并跳转到"),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%AE%89%E8%A3%85%E5%99%A8"}},[t._v("创建安装器")]),t._v("，但如果你遇到了此错误：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(509),alt:""}})]),t._v(" "),e("p",[t._v("这说明我们需要手动提取安装程序。")]),t._v(" "),e("h3",{attrs:{id:"提取安装程序-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提取安装程序-2"}},[t._v("#")]),t._v(" 提取安装程序")]),t._v(" "),e("p",[t._v("获取 InstallMacOSX/InstallOS.dmg 并挂载以开始：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(510),alt:""}})]),t._v(" "),e("p",[t._v("下一步，我们来打开终端窗口，然后在我们的桌面创建一个文件夹来做准备。每次运行一行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/Desktop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" MacInstall "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" MacInstall\n")])])]),e("p",[t._v("现在我们到了好玩的部分了，解压安装器（记注，这可能需要花费一些时间）：")]),t._v(" "),e("ul",[e("li",[t._v("对于 EI Capitan（10.11）和更旧的操作系统：")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("xar -xf /Volumes/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X/InstallMacOSX.pkg\n")])])]),e("ul",[e("li",[t._v("对于 Sierra（10.12）：")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("xar -xf /Volumes/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS/InstallOS.pkg\n")])])]),e("p",[t._v("接下来，运行下面的命令（一次一行）：")]),t._v(" "),e("ul",[e("li",[t._v("Yosemite：")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallMacOSX.pkg\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/SharedSupport/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app /Applications\n")])])]),e("ul",[e("li",[t._v("El Capitan：")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallMacOSX.pkg\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/SharedSupport/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app /Applications\n")])])]),e("ul",[e("li",[t._v("Sierra：")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" InstallOS.pkg\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvzf Payload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" InstallESD.dmg Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/SharedSupport/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app /Applications\n")])])]),e("p",[t._v("一旦完成，你就可以跳转到"),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%AE%89%E8%A3%85%E5%99%A8"}},[t._v("创建安装器")]),t._v("了！")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("获取经典版本的 macOS：在线方式（支持 10.7-10.15）")]),t._v(" "),e("h3",{attrs:{id:"经典版本-macos-在线方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#经典版本-macos-在线方式"}},[t._v("#")]),t._v(" 经典版本 macOS：在线方式")]),t._v(" "),e("p",[t._v("此方式允许我们从 Apple 下载经典版本的 macOS，包括 10.7 到当前版本，但是这些支持恢复模式的安装器，所以需要安装器内部有互联网连接")]),t._v(" "),e("p",[t._v("你将会使用 macrecovery.py 作为替代以开始。此工具实际上已经捆绑在了 OpenCorePkg 中：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(360),alt:""}})]),t._v(" "),e("p",[t._v("对于运行的说明非常简单，选择下方的其中一个命令，具体取决于你想要下载哪一个操作系统：")]),t._v(" "),e("ul",[e("li",[t._v("注意：0.6.4 和更旧的 macrecovery.py 的构建已损坏，你需要从"),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 master 分支的副本"),e("OutboundLink")],1),t._v("下载它并使用置于 "),e("code",[t._v("Utilities/macrecovery/")]),t._v(" 目录下的那一个")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lion（10.7）：")]),t._v("\npython ./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\npython ./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mountain Lion（10.8）：")]),t._v("\npython ./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks（10.9）：")]),t._v("\npython ./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite（10.10）：")]),t._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan（10.11）：")]),t._v("\npython ./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra（10.12）：")]),t._v("\npython ./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra（10.13）")]),t._v("\npython ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\npython ./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave（10.14）")]),t._v("\npython ./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina（10.15）")]),t._v("\npython ./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最新版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如：Big Sur（11）")]),t._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),e("p",[t._v("在终端中运行此处的一行命令，一旦完成，你将会得到类似下面的输出：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(361),alt:""}})]),t._v(" "),e("p",[t._v("一旦这项工作完成，使用 GUID 分区表将你的 USB磁盘 格式化为 FAT32 格式：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(511),alt:""}})]),t._v(" "),e("p",[t._v("最后，在此驱动器的根目录创建一个名为 "),e("code",[t._v("com.apple.recovery.boot")]),t._v(" 的文件夹，并且将新下载的 BaseSystem 或恢复模式镜像（RecoveryImage）文件放进去：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(512),alt:""}})]),t._v(" "),e("p",[t._v("至此，你可以跳转到"),e("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE-opencore-%E7%9A%84-efi-%E6%BA%90"}},[t._v("配置 OpenCore 的 EFI 源")]),t._v("了")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("获取经典版本的 macOS：磁盘映像（支持 10.4-10.6）")]),t._v(" "),e("h3",{attrs:{id:"经典版本-macos-磁盘映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#经典版本-macos-磁盘映像"}},[t._v("#")]),t._v(" 经典版本 macOS：磁盘映像")]),t._v(" "),e("p",[t._v("此方式依赖从 Apple 或 Acidanthera 的托管映像，并将其恢复到您的驱动器。")]),t._v(" "),e("h4",{attrs:{id:"acidanthera-的映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera-的映像"}},[t._v("#")]),t._v(" Acidanthera 的映像")]),t._v(" "),e("p",[t._v("以下的安装器是从真正的 Mac 的还原磁盘中拉取出的，其 SMBIOS 锁已移除，OS X 本身的内容未以任何方式进行修改。")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://mega.nz/folder/D3ASzLzA#7sjYXE2X09f6aGjol_C7dg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.4.10(8R4088)"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://mega.nz/folder/inRBTarD#zanf7fUbviwz3WHBU5xpCg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.5.7(9J3050)"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://mega.nz/folder/z5YUhYTb#gA_IRY5KMuYpnNCg7kR3ug/file/ioQkTagI",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.6.7(10J4139)"),e("OutboundLink")],1)])])]),t._v(" "),e("h4",{attrs:{id:"apple-的映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apple-的映像"}},[t._v("#")]),t._v(" Apple 的映像")]),t._v(" "),e("p",[t._v("注意，这些镜像需要你有一个 Apple 开发者账号以访问。")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_v10.5_leopard_9a581/leopard_9a581_userdvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.5.0 Golden Master（最终版本）(9a581)"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_version_10.6_snow_leopard_build_10a432/mac_os_x_v10.6_build_10a432_user_dvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS X 10.6.0 Golden Master（最终版本）(10a432)"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"恢复驱动器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复驱动器"}},[t._v("#")]),t._v(" 恢复驱动器")]),t._v(" "),e("p",[t._v("现在来到了有趣的部分，你需要首先打开你刚刚下载的 dmg 并挂载它。现在打开磁盘工具并将你的驱动器格式化为使用 GUID 分区表的 macOS 扩展（HFS+）格式：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(371),alt:"格式化 USB"}})]),t._v(" "),e("p",[t._v("接下来有 2 个可以跟随的选项：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#asr"}},[t._v("ASR 恢复")]),t._v("（Apple Software Restore，Apple 软件恢复）\n"),e("ul",[e("li",[t._v("基于终端，在系统完整性保护打开的情况下使用")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%A3%81%E7%9B%98%E5%B7%A5%E5%85%B7"}},[t._v("磁盘工具恢复")]),t._v(" "),e("ul",[e("li",[t._v("在较新的系统中可能需要关闭系统完整性保护")])])])]),t._v(" "),e("h4",{attrs:{id:"asr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asr"}},[t._v("#")]),t._v(" ASR")]),t._v(" "),e("p",[t._v("在这里，您只需简单地打开终端并运行以下命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" asr restore -source /Volumes/Mac"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" DVD  -target /Volumes/MyVolume -erase -noverify\n")])])]),e("ul",[e("li",[e("strong",[t._v("注意")]),t._v("：这可能与您的配置不一致，请对照更改：\n"),e("ul",[e("li",[t._v("将 "),e("code",[t._v("/Volumes/Mac\\ OS\\ X\\ Install\\ DVD")]),t._v(" 更改为你所挂载的磁盘镜像的名称")]),t._v(" "),e("li",[t._v("将 "),e("code",[t._v("/Volumes/MyVolume")]),t._v(" 更改为你的 USB 的名称")])]),t._v(" "),e("blockquote",[e("p",[t._v("译者注：上方的“名称”指的是你所挂载的磁盘镜像或 USB 的卷标，并非你的磁盘镜像文件名或 USB 型号。")])])])]),t._v(" "),e("p",[t._v("这将会花费一定的时间，但你一旦完成，即可跳转到"),e("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE-opencore-%E7%9A%84-efi-%E6%BA%90"}},[t._v("配置 OpenCore 的 EFI 源")])]),t._v(" "),e("h4",{attrs:{id:"磁盘工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘工具"}},[t._v("#")]),t._v(" 磁盘工具")]),t._v(" "),e("p",[t._v("由于磁盘工具的一些让人讨厌的问题，在系统完整性保护打开的情况下，很多的恢复都会失败。如果你遇到问题，我们推荐你使用 "),e("a",{attrs:{href:"#asr"}},[t._v("ASR 方式")]),t._v("或者关闭系统完整性保护。")]),t._v(" "),e("p",[t._v("打开磁盘工具以开始，你应该在侧边栏中同时看到你的 USB 驱动器和磁盘映像。在这种情况下，选择恢复")]),t._v(" "),e("p",[e("img",{attrs:{src:s(513),alt:""}}),t._v(" "),e("img",{attrs:{src:s(514),alt:""}})]),t._v(" "),e("p",[t._v("这将会花费一定的时间，但你一旦完成，即可跳转到"),e("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE-opencore-%E7%9A%84-efi-%E6%BA%90"}},[t._v("配置 OpenCore 的 EFI 源")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("故障排除")]),t._v(" "),e("p",[t._v("如果你遇到了错误，比如在恢复时出现这种情况：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(515),alt:""}})]),t._v(" "),e("p",[t._v("这很可能表示系统完整性保护需要关闭，但是我们推荐以 "),e("a",{attrs:{href:"#asr"}},[t._v("ASR 方式")]),t._v("来代替。")])])]),t._v(" "),e("h2",{attrs:{id:"创建安装器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建安装器"}},[t._v("#")]),t._v(" 创建安装器")]),t._v(" "),e("p",[t._v("Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use macOS Extended (HFS+) with a GUID partition map. This will create two partitions: the main "),e("code",[t._v("MyVolume")]),t._v(" and a second called "),e("code",[t._v("EFI")]),t._v(" which is used as a boot partition where your firmware will check for boot files.")]),t._v(" "),e("ul",[e("li",[t._v("Note: By default, Disk Utility only shows partitions – press Cmd/Win+2 to show all devices (alternatively you can press the View button)")]),t._v(" "),e("li",[t._v('Note 2: Users following "Legacy macOS: Online method" section can skip to '),e("a",{attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(371),alt:"Formatting the USB"}})]),t._v(" "),e("p",[t._v("Next run the "),e("code",[t._v("createinstallmedia")]),t._v(" command provided by "),e("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple"),e("OutboundLink")],1),t._v(". Note that the command is made for USB's formatted with the name "),e("code",[t._v("MyVolume")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),e("p",[t._v("This will take some time so you may want to grab a coffee or continue reading the guide (to be fair you really shouldn't be following this guide step by step without reading the whole thing first).")]),t._v(" "),e("p",[t._v("You can also replace the "),e("code",[t._v("createinstallmedia")]),t._v(" path with that of where your installer's located (same idea with the drive name).")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Legacy createinstallmedia Commands")]),t._v(" "),e("p",[t._v("Pulled from Apple's own site: "),e("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create a bootable installer for macOS"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app --nointeraction\n")])])])]),t._v(" "),e("h2",{attrs:{id:"legacy-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legacy-setup"}},[t._v("#")]),t._v(" Legacy Setup")]),t._v(" "),e("p",[t._v("For systems not supporting UEFI boot, see below:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Setting up Legacy Boot")]),t._v(" "),e("p",[t._v("To start, you need the following:")]),t._v(" "),e("ul",[e("li",[t._v("BootInstall_IA32.tool or BootInstall_X64.tool\n"),e("ul",[e("li",[t._v("This can be found in OpenCorePkg under "),e("code",[t._v("/Utilties/LegacyBoot/")])])])]),t._v(" "),e("li",[t._v("Install USB(Created above)")])]),t._v(" "),e("p",[t._v("Within your OpenCore build folder, navigate to "),e("code",[t._v("Utilities/LegacyBoot")]),t._v(". Here you'll find a file called "),e("code",[t._v("BootInstall_ARCH.tool")]),t._v(". What this does is install DuetPkg to your desired drive.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(516),alt:"BootInstall Location"}})]),t._v(" "),e("p",[t._v("Now run this tool in terminal "),e("strong",[t._v("with sudo")]),t._v("(This tool will likely fail otherwise):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),e("p",[e("img",{attrs:{src:s(517),alt:"Disk Selection/writing new MBR"}})]),t._v(" "),e("p",[t._v("This will give you a list of available disks, choose yours and you will be prompted to write a new MBR. Choose yes"),e("code",[t._v("[y]")]),t._v(" and you'll be finished.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(518),alt:"Finished Installer"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(519),alt:"Base EFI"}})]),t._v(" "),e("p",[t._v("This will provide you with an EFI partition with either a "),e("strong",[t._v("bootia32")]),t._v(" or "),e("strong",[t._v("bootx64")]),t._v(" file")])]),t._v(" "),e("h2",{attrs:{id:"配置-opencore-的-efi-源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-opencore-的-efi-源"}},[t._v("#")]),t._v(" 配置 OpenCore 的 EFI 源")]),t._v(" "),e("p",[t._v("Setting up OpenCore's EFI environment is simple – all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend "),e("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("MountEFI"),e("OutboundLink")],1),t._v(" comes in:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(520),alt:"MountEFI"}})]),t._v(" "),e("p",[t._v("You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(521),alt:"Empty EFI partition"}})]),t._v(" "),e("h2",{attrs:{id:"现在所有事项都已完成-跳转到配置-efi-以完成你的工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现在所有事项都已完成-跳转到配置-efi-以完成你的工作"}},[t._v("#")]),t._v(" 现在所有事项都已完成，跳转到"),e("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("配置 EFI")]),t._v(" 以完成你的工作")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);