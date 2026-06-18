----  ENTORNO NVIDIA --------

hl.env("GBM_BACKEND", "nvidia-drm")
hl.env("AQ_FORCE_LINEAR_BLIT", "0")

hl.env("LIBVA_DRIVER_NAME", "nvidia")
hl.env("__GLX_VENDOR_LIBRARY_NAME", "nvidia")
hl.env("ELECTRON_OZONE_PLATFORM_HINT", "auto")
hl.env("NVD_BACKEND", "direct")