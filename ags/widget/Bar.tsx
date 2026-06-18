import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Hyprland from "gi://AstalHyprland"
import Wp from "gi://AstalWp"

function Workspaces() {
  const hyprland = Hyprland.get_default()
  
  return (
    <box>
      {Array.from({ length: 10 }, (_, i) => i + 1).map(i => (
        <button
          onClicked={() => execAsync(`hyprctl dispatch workspace ${i}`)}
        >
          <label label={`${i}`} />
        </button>
      ))}
    </box>
  )
}

function Clock() {
  const time = createPoll("", 1000, () => {
    const date = new Date()
    return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
  })

  return <label label={time} />
}

function Volume() {
  const wp = Wp.get_default()
  const speaker = wp?.audio.defaultSpeaker
  
  if (!speaker) return <label label="No audio" />

  const volume = createPoll("", 1000, () => {
    return `${Math.round(speaker.volume * 100)}%`
  })

  return (
    <box>
      <label label="🔊 " />
      <label label={volume} />
    </box>
  )
}

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox cssName="centerbox">
        <box $type="start">
          <Workspaces />
        </box>
        <box $type="center">
          <Clock />
        </box>
        <box $type="end">
          <Volume />
        </box>
      </centerbox>
    </window>
  )
}
