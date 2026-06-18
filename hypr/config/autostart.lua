hl.on("hyprland.start", function ()
    hl.exec_cmd("/usr/lib/xdg-desktop-portal-hyprland &")
    hl.exec_cmd("/usr/lib/xdg-desktop-portal-gtk &")
    ---iniciar ags
    hl.exec_cmd("ags run")
end)
