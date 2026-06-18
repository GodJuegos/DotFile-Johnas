
------------------
---- MONITORES ----
------------------

-- See https://wiki.hypr.land/Configuring/Basics/Monitors/

-- Monitor principal: Dell 2208WFP (DP-3) - resolución nativa
hl.monitor({
    output   = "DP-3",
    mode     = "1680x1050@59.95",
    position = "0x0",
    scale    = 1,
})

-- Monitor secundario: Kingston 24'TV (HDMI-A-1) - a la derecha
hl.monitor({
    output   = "HDMI-A-1",
    mode     = "1920x1080@59.94",
    position = "1680x0",
    scale    = 1,
})
