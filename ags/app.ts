import app from "ags/gtk4/app"

import style from "./style.scss"
import Bar from "./widget/Bar"
import NotificationPopups from "./widget/notification/Notification"
import ControlCenter from "./widget/control_center/ControlCenter"

app.start({
  icons: `${SRC}/icons`,
  css: style,
  main() {
    app.get_monitors().map(monitor => {
        Bar(monitor)
        NotificationPopups(monitor)
        ControlCenter(monitor)
    })
  },
})