(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{360:function(e,t,v){e.exports=v.p+"assets/img/macrecovery.af5c41c1.png"},361:function(e,t,v){e.exports=v.p+"assets/img/download-done.05d30da0.png"},370:function(e,t,v){e.exports=v.p+"assets/img/unknown-13.2dca606f.png"},489:function(e,t,v){e.exports=v.p+"assets/img/unknown-5.0cee0d3a.png"},490:function(e,t,v){e.exports=v.p+"assets/img/unknown-6.c65407b2.png"},491:function(e,t,v){e.exports=v.p+"assets/img/unknown-8.21d65816.png"},492:function(e,t,v){e.exports=v.p+"assets/img/unknown-9.d7a601da.png"},493:function(e,t,v){e.exports=v.p+"assets/img/unknown-11.0cee0d3a.png"},494:function(e,t,v){e.exports=v.p+"assets/img/unknown-12.c65407b2.png"},495:function(e,t,v){e.exports=v.p+"assets/img/unknown-14.21d65816.png"},496:function(e,t,v){e.exports=v.p+"assets/img/unknown-15.4ec42b10.png"},497:function(e,t,v){e.exports=v.p+"assets/img/unknown-16.a34cfc74.png"},498:function(e,t,v){e.exports=v.p+"assets/img/unknown-17.d7a601da.png"},499:function(e,t,v){e.exports=v.p+"assets/img/unknown-18.4d8a1388.png"},500:function(e,t,v){e.exports=v.p+"assets/img/unknown-20.7e0e5028.png"},501:function(e,t,v){e.exports=v.p+"assets/img/unknown-21.04611101.png"},632:function(e,t,v){"use strict";v.r(t);var o=v(25),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"在-linux-中制作安装器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-中制作安装器"}},[e._v("#")]),e._v(" 在 Linux 中制作安装器")]),e._v(" "),o("ul",[o("li",[e._v("支持的版本：0.6.4")])]),e._v(" "),o("p",[e._v("虽然你不需要进行一次完全重新安装以使用 OpenCore，但是建议一些用户对他们的引导管理器升级进行完全的重新安排。")]),e._v(" "),o("p",[e._v("你需要依赖这些来开始：")]),e._v(" "),o("ul",[o("li",[e._v("4GB USB 驱动器")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery.py"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("注意：0.6.4 和更低版本的 macrecovery.py 构建是损坏的，你需要"),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载 master 分支的副本"),o("OutboundLink")],1),e._v("并使用放置于 "),o("code",[e._v("Utilities/macrecovery/")]),e._v(" 目录下的那一个")])]),e._v(" "),o("h2",{attrs:{id:"下载-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下载-macos"}},[e._v("#")]),e._v(" 下载 macOS")]),e._v(" "),o("p",[e._v("我们现在开始，首先 cd 到 "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery 所在的目录"),o("OutboundLink")],1),e._v("然后运行下方的命令：")]),e._v(" "),o("p",[o("img",{attrs:{src:v(360),alt:""}})]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将下方的命令中的目录调整为正确的")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/Downloads/OpenCore-0/Utilities/macrecovery/\n")])])]),o("p",[e._v("接着，取决于你想要启动什么操作系统，运行下方的其中一组命令：")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lion（10.7）：")]),e._v("\npython ./macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\npython ./macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mountain Lion（10.8）：")]),e._v("\npython ./macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mavericks（10.9）：")]),e._v("\npython ./macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yosemite（10.10）：")]),e._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# El Capitan（10.11）：")]),e._v("\npython ./macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sierra（10.12）：")]),e._v("\npython ./macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# High Sierra（10.13）")]),e._v("\npython ./macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\npython ./macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mojave（10.14）")]),e._v("\npython ./macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Catalina（10.15）")]),e._v("\npython ./macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 最新版本")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 例如：Big Sur（11）")]),e._v("\npython ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download\n")])])]),o("p",[e._v("在这里，在终端中运行其中一组命令，完成时你将会得到类似这样的输出：")]),e._v(" "),o("p",[o("img",{attrs:{src:v(361),alt:""}})]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("注意")]),e._v("：取决于操作系统，你会得到 BaseSystem 或 RecoveryImage 文件。他们都有同样的作用，所以当我们提到 BaseSystem 时，相同的内容也适用于 RecoveryImage")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("macOS 11 Big Sur 注意事项")]),e._v("：由于这个操作系统是全新的，某些问题依旧需要系统来解决。更多信息请参阅此处："),o("RouterLink",{attrs:{to:"/extras/big-sur/"}},[e._v("OpenCore 和 macOS 11: Big Sur")])],1),e._v(" "),o("ul",[o("li",[e._v("对于第一次使用的用户，我们推荐 10.15 Catalina")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Nvidia 显卡注意事项")]),e._v("：记得确认你的硬件是否支持较新的操作系统，请参阅"),o("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("硬件限制")])],1)])]),e._v(" "),o("h2",{attrs:{id:"创建安装器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建安装器"}},[e._v("#")]),e._v(" 创建安装器")]),e._v(" "),o("p",[e._v("这个部分将着眼于在 USB 设备上创建必要的分区。你可以使用你最喜欢的程序，它可以是 "),o("code",[e._v("gdisk")]),e._v(" "),o("code",[e._v("fdisk")]),e._v(" "),o("code",[e._v("parted")]),e._v(" "),o("code",[e._v("gparted")]),e._v(" 或 "),o("code",[e._v("gnome-disks")]),e._v("。此指南将注重于使用 "),o("code",[e._v("gdisk")]),e._v("，因为它很好用，并且可以在稍后更改分区类型，让 macOS Recovery HD 可以启动。（此处使用的发行版是 Ubuntu 18.04，其他版本或发行版可能也没有问题）")]),e._v(" "),o("p",[e._v("本指南基于"),o("a",{attrs:{href:"https://midi1996.github.io/hackintosh-internet-install-gitbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Internet Install Guide》"),o("OutboundLink")],1),e._v("，归功于 "),o("a",{attrs:{href:"https://github.com/midi1996",target:"_blank",rel:"noopener noreferrer"}},[e._v("midi1996"),o("OutboundLink")],1),e._v(" 对其的付出。")]),e._v(" "),o("h3",{attrs:{id:"方法-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法-1"}},[e._v("#")]),e._v(" 方法 1")]),e._v(" "),o("p",[e._v("在终端中：")]),e._v(" "),o("ol",[o("li",[e._v("运行 "),o("code",[e._v("lsblk")]),e._v(" 并查明你的 USB 块设备\n"),o("img",{attrs:{src:v(489),alt:"lsblk"}})]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v("sudo gdisk /dev/<你的 USB 块设备>")]),e._v(" "),o("ol",[o("li",[e._v("如果你被询问要使用什么分区表，选择 GPT。\n"),o("img",{attrs:{src:v(490),alt:"选择 GPT"}})]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("p")]),e._v(" 以输出你的块设备的分区（并确认它是你需要的那一个）\n"),o("img",{attrs:{src:v(370),alt:""}})]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("o")]),e._v(" 以清除分区表并创建一个新的 GPT 分区表（如果目前不是空的）\n"),o("ol",[o("li",[e._v("使用 "),o("code",[e._v("y")]),e._v(" 来确认\n"),o("img",{attrs:{src:v(491),alt:""}})])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("n")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("partition number")]),e._v("：留空以保持默认")]),e._v(" "),o("li",[o("code",[e._v("first sector")]),e._v("：留空以保持默认")]),e._v(" "),o("li",[o("code",[e._v("last sector")]),e._v("：留空以选择整块磁盘")]),e._v(" "),o("li",[o("code",[e._v("Hex code or GUID")]),e._v("：使用 "),o("code",[e._v("0700")]),e._v(" 设置为微软基本数据分区（Microsoft basic data partition）类型")])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("w")]),e._v(" "),o("ul",[o("li",[e._v("使用 "),o("code",[e._v("y")]),e._v(" 来确认\n"),o("img",{attrs:{src:v(492),alt:""}})]),e._v(" "),o("li",[e._v("在某些情况下还需要重启一次，但是很少见，如果你想保证没有问题，那就重启你的电脑。你也可以尝试重新插入你的 USB 驱动器。")])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("q")]),e._v(" 以关闭 "),o("code",[e._v("gdisk")]),e._v("（通常情况下它会自己关闭）")])])]),e._v(" "),o("li",[e._v("使用 "),o("code",[e._v("lsblk")]),e._v(" 来查明你的分区的标识符")]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<你的 USB 分区块>')]),e._v(" 以将你的 USB 驱动器格式化为 FAT32 文件系统并命名为 OPENCORE")]),e._v(" "),o("li",[e._v("然后 "),o("code",[e._v("cd")]),e._v(" 到 "),o("code",[e._v("/OpenCore/Utilities/macrecovery/")]),e._v("，你将会获得一个 "),o("code",[e._v(".dmg")]),e._v(" 和 "),o("code",[e._v(".chunklist")]),e._v(" 文件\n"),o("ol",[o("li",[e._v("使用 "),o("code",[e._v("udisksctl")]),e._v(" 挂载你的 USB 分区（"),o("code",[e._v("udisksctl mount -b /dev/<你的 USB 分区块>")]),e._v("，大多数情况下不需要 sudo）或者使用 "),o("code",[e._v("mount")]),e._v("（"),o("code",[e._v("sudo mount /dev/<你的 USB 分区块> /你的/挂载点")]),e._v("，需要 sudo）")]),e._v(" "),o("li",[o("code",[e._v("cd")]),e._v(" 到你的 USB 驱动器并在你的 FAT32 USB 分区的根目录 "),o("code",[e._v("mkdir com.apple.recovery.boot")])]),e._v(" "),o("li",[e._v("现在 "),o("code",[e._v("cp")]),e._v(" 或 "),o("code",[e._v("rsync")]),e._v(" "),o("code",[e._v("BaseSystem.dmg")]),e._v(" 和 "),o("code",[e._v("BaseSystem.chunklist")]),e._v(" 到 "),o("code",[e._v("com.apple.recovery.boot")]),e._v(" 文件夹中。")])])])]),e._v(" "),o("h3",{attrs:{id:"方法-2-在方法-1-失败时使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#方法-2-在方法-1-失败时使用"}},[e._v("#")]),e._v(" 方法 2（在方法 1 失败时使用）")]),e._v(" "),o("p",[e._v("在终端中：")]),e._v(" "),o("ol",[o("li",[e._v("运行 "),o("code",[e._v("lsblk")]),e._v(" 并查明你的 USB 块设备\n"),o("img",{attrs:{src:v(493),alt:""}})]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v("sudo gdisk /dev/<你的 USB 块设备>")]),e._v(" "),o("ol",[o("li",[e._v("如果你被询问要使用什么分区表，选择 GPT。\n"),o("img",{attrs:{src:v(494),alt:""}})]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("p")]),e._v(" 以输出你的块设备的分区（并确认它是你需要的那一个）\n"),o("img",{attrs:{src:v(370),alt:""}})]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("o")]),e._v(" 以清除分区表并创建一个新的 GPT 分区表（如果目前不是空的）\n"),o("ol",[o("li",[e._v("使用 "),o("code",[e._v("y")]),e._v(" 来确认\n"),o("img",{attrs:{src:v(495),alt:""}})])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("n")]),e._v(" "),o("ol",[o("li",[e._v("partition number：留空以保持默认")]),e._v(" "),o("li",[e._v("first sector：留空以保持默认")]),e._v(" "),o("li",[e._v("last sector："),o("code",[e._v("+200M")]),e._v(" 以创建一个 200MB 的分区，并会在稍后命名为 OPENCORE")]),e._v(" "),o("li",[e._v("Hex code or GUID：使用 "),o("code",[e._v("0700")]),e._v(" 设置为微软基本数据分区（Microsoft basic data partition）类型\n"),o("img",{attrs:{src:v(496),alt:""}})])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("n")]),e._v(" "),o("ol",[o("li",[e._v("partition number：留空以保持默认")]),e._v(" "),o("li",[e._v("first sector：留空以保持默认")]),e._v(" "),o("li",[e._v("last sector：留空以保持默认（或者如果你想进一步划分 USB 驱动器的剩余部分，你可以使用 "),o("code",[e._v("+3G")]),e._v("）")]),e._v(" "),o("li",[e._v("Hex code or GUID：使用 "),o("code",[e._v("af00")]),e._v(" 设置为 Apple HFS/HFS+ 分区类型\n"),o("img",{attrs:{src:v(497),alt:""}})])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("w")]),e._v(" "),o("ul",[o("li",[e._v("使用 "),o("code",[e._v("y")]),e._v(" 来确认\n"),o("img",{attrs:{src:v(498),alt:""}})]),e._v(" "),o("li",[e._v("在某些情况下还需要重启一次，但是很少见，如果你想保证没有问题，那就重启你的电脑。你也可以尝试重新插入你的 USB 驱动器。")])])]),e._v(" "),o("li",[e._v("发送 "),o("code",[e._v("q")]),e._v(" 以关闭 "),o("code",[e._v("gdisk")]),e._v("（通常情况下它会自己关闭）")])])]),e._v(" "),o("li",[e._v("再次使用 "),o("code",[e._v("lsblk")]),e._v(" 以查明 200MB 驱动器和其他分区\n"),o("img",{attrs:{src:v(499),alt:""}})]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v('sudo mkfs.vfat -F 32 -n "OPENCORE" /dev/<你的 200MB 分区块>')]),e._v(" 以格式化你的 200MB 分区为 FAT32 文件系统，并命名为 OPENCORE")]),e._v(" "),o("li",[e._v("然后 "),o("code",[e._v("cd")]),e._v(" 到 "),o("code",[e._v("/OpenCore/Utilities/macrecovery/")]),e._v("，你将会获得一个 "),o("code",[e._v(".dmg")]),e._v(" 和 "),o("code",[e._v(".chunklist")]),e._v(" 文件\n"),o("ol",[o("li",[e._v("使用 "),o("code",[e._v("udisksctl")]),e._v(" 挂载你的 USB 分区（"),o("code",[e._v("udisksctl mount -b /dev/<你的 USB 分区块>")]),e._v("，大多数情况下不需要 sudo）或者使用 "),o("code",[e._v("mount")]),e._v("（"),o("code",[e._v("sudo mount /dev/<你的 USB 分区块> /你的/挂载点")]),e._v("，需要 sudo）")]),e._v(" "),o("li",[o("code",[e._v("cd")]),e._v(" 到你的 USB 驱动器并在你的 FAT32 USB 分区的根目录 "),o("code",[e._v("mkdir com.apple.recovery.boot")])]),e._v(" "),o("li",[e._v("下载 "),o("code",[e._v("dmg2img")]),e._v("（在大多数发行版中可用）")]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v("dmg2img -l BaseSystem.dmg")]),e._v(" 并查明哪个分区具有 "),o("code",[e._v("disk image")]),e._v(" 特性\n"),o("img",{attrs:{src:v(500),alt:""}})]),e._v(" "),o("li",[e._v("运行 "),o("code",[e._v("dmg2img -p <分区号> -i BaseSystem.dmg -o <你的 3GB+ 分区块>")]),e._v(" 以提取并写入恢复模式镜像到分区中\n"),o("ul",[o("li",[e._v("这将会花费一些时间。如果你在使用一个速度较慢的 USB 设备，将会花费"),o("strong",[e._v("大量时间")]),e._v("（一个快速的 USB2.0 驱动器花费了少于 5 分钟）。\n"),o("img",{attrs:{src:v(501),alt:""}})])])])])])]),e._v(" "),o("h2",{attrs:{id:"现在所有事项都已完成-跳转到设置-efi-以完成你的工作"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#现在所有事项都已完成-跳转到设置-efi-以完成你的工作"}},[e._v("#")]),e._v(" 现在所有事项都已完成，跳转到"),o("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[e._v("设置 EFI")]),e._v(" 以完成你的工作")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);