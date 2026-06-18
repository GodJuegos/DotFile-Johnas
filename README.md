# DotFile-Johnas

Dotfiles para Arch Linux + Hyprland. Configuraciones de personalización del sistema.

## Requisitos Previos

### 1. Instalar Arch Linux + Hyprland

Antes de usar estos dotfiles, necesitas tener Arch Linux con Hyprland instalado.

```bash
# Instalar Hyprland y dependencias básicas
sudo pacman -S hyprland waybar kitty

# Iniciar Hyprland desde TTY
Hyprland
```

Para una instalación completa, consulta la [wiki oficial de Hyprland](https://wiki.hyprland.org/Getting-Started/Installation/).

### 2. Instalar Yay (AUR Helper)

```bash
# Instalar dependencias
sudo pacman -S --needed base-devel

# Clonar y compilar yay
git clone https://aur.archlinux.org/yay.git
cd yay && makepkg -si
cd .. && rm -rf yay
```

### 3. Configurar Git y Zsh

```bash
# Instalar git y zsh
sudo pacman -S git zsh

# Cambiar shell por defecto a zsh
chsh -s /bin/zsh

# Configurar git
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 4. Instalar Debtap (para archivos .deb)

```bash
# Instalar desde AUR
yay -S debtap

# Actualizar base de datos de debtap
sudo debtap -u
```

Uso: `debtap archivo.deb` para convertir a paquete de Arch.

## Instalación de Paquetes

### Terminal
```bash
# Emulador de terminal rápido con soporte GPU
sudo pacman -S kitty
```

### Personalización GNOME
```bash
# Herramienta para ajustar configuraciones ocultas de GNOME/GTK
sudo pacman -S gnome-tweaks
```

### Wallpaper
```bash
# Daemon de wallpapers para Wayland con transiciones animadas
sudo pacman -S swww
```

### Info del Sistema
```bash
# Muestra información del sistema en la terminal (como neofetch pero más rápido)
sudo pacman -S fastfetch
```

### Lanzador de Aplicaciones
```bash
# Menú/lanzador de apps compatible con Wayland
sudo pacman -S rofi-wayland
```

### File Manager
```bash
# Explorador de archivos ligero (fork de Nautilus)
sudo pacman -S nemo
```

### Traducciones
```bash
# Traducciones al español para apps de Cinnamon/Nemo
sudo pacman -S cinnamon-translations
```

### Fuentes
```bash
# Fuente monoespaciada con iconos (Nerd Font) para terminal
sudo pacman -S ttf-jetbrains-mono-nerd
```

```bash
# Fuente Nunito para interfaz del sistema
sudo pacman -S ttf-nunito
```

### Diálogos
```bash
# Muestra cuadros de diálogo gráficos desde la terminal
sudo pacman -S zenity
```

### Utilidades
```bash
# Calculadora de precisión para scripts y terminal
sudo pacman -S bc
```

### Visor de Imágenes
```bash
# Visor de imágenes de GNOME, ligero y rápido
sudo pacman -S eog
```

### Monitor del Sistema
```bash
# Monitor de recursos (CPU, RAM, procesos) con interfaz gráfica
sudo pacman -S gnome-system-monitor
```

### Visor de PDF
```bash
# Visor de documentos PDF de GNOME
sudo pacman -S evince
```

### Portales XDG (Wayland)
```bash
# Portal de escritorio específico para Hyprland (screenshots, clipboard, etc.)
sudo pacman -S xdg-desktop-portal-hyprland
```

```bash
# Portal GTK como fallback para apps que no soportan el portal de Hyprland
sudo pacman -S xdg-desktop-portal-gtk
```

### Multimedia
```bash
# Suite completa de codecs y herramientas de audio/video
sudo pacman -S ffmpeg
```

### Nemo Extensiones
```bash
# Integración de compresión/descompresión de archivos en Nemo
sudo pacman -S nemo-fileroller
```

### Barra Superior (AGS - Aylur's GTK Shell)
```bash
# AGS v3 - Shell personalizable con TypeScript
yay -S aylurs-gtk-shell

# Dependencias de compilación para bindings de Astal
sudo pacman -S meson vala glib2-devel

# Compilador SCSS (necesario para estilos de AGS)
sudo pacman -S dart-sass

# Bindings necesarios para AGS (workspaces, audio, etc.)
yay -S libastal-hyprland-git libastal-wireplumber-git
```

**Nota:** AGS requiere configuración en `~/.config/ags/`. Los bindings de Astal permiten:
- `libastal-hyprland-git`: Control de workspaces y eventos de Hyprland
- `libastal-wireplumber-git`: Control de audio/volumen
- `dart-sass`: Compilación de estilos SCSS
- `meson`, `vala`, `glib2-devel`: Dependencias para compilar los bindings desde AUR

## Configuración

### Hyprland

Los archivos de configuración están en `.config/hypr/`:

- `hyprland.lua` - Configuración principal
- `config/monitors.lua` - Configuración de monitores
- `config/keyboard.lua` - Configuración del teclado

Para aplicar los dotfiles:

```bash
# Copiar configuración de Hyprland
cp -r .config/hypr ~/.config/
```

### Fastfetch

Fastfetch muestra información del sistema en la terminal.

```bash
# Generar configuración por defecto
fastfetch --gen-config

# Editar configuración
nano ~/.config/fastfetch/config.jsonc
```

Para usar un tema personalizado:

```bash
fastfetch --load-config ~/.config/fastfetch/config.jsonc
```

### Rofi (Wayland)

Rofi es el lanzador de aplicaciones.

```bash
# Crear directorio de configuración
mkdir -p ~/.config/rofi

# Copiar tema personalizado (si tienes uno)
cp theme.rasi ~/.config/rofi/

# Configurar rofi
rofi -dump-config > ~/.config/rofi/config.rasi
```

Para usar rofi como lanzador en Hyprland, edita `hyprland.lua`:

```lua
local menu = "rofi -show drun"
```

### Kitty (Terminal)

```bash
# Crear configuración
mkdir -p ~/.config/kitty

# Configuración básica
cat > ~/.config/kitty/kitty.conf << EOF
font_family JetBrainsMono Nerd Font
font_size 12.0
window_padding_width 10
background_opacity 0.9
EOF
```

### Swww (Wallpaper)

```bash
# Iniciar swww daemon (agregar a hyprland.lua)
# exec-once = swww-daemon

# Cambiar wallpaper
swww img ~/Pictures/wallpaper.jpg

# Con transición
swww img ~/Pictures/wallpaper.jpg --transition-type grow --transition-angle 30 --transition-step 1
```

### Nemo (File Manager)

```bash
# Configurar como file manager por defecto
xdg-mime default nemo.desktop inode/directory

# Abrir nemo
nemo
```

### Fuentes Nerd Font

```bash
# Verificar instalación
fc-list | grep "JetBrainsMono"

# Configurar en aplicaciones
# La mayoría de terminales y editores usan: "JetBrainsMono Nerd Font"
```

### XDG Desktop Portal

Para que las aplicaciones GTK/Qt funcionen correctamente en Wayland:

```bash
# Verificar que estén corriendo
systemctl --user status xdg-desktop-portal-hyprland
systemctl --user status xdg-desktop-portal-gtk
```

Si hay problemas:

```bash
# Reiniciar portales
systemctl --user restart xdg-desktop-portal-hyprland
systemctl --user restart xdg-desktop-portal-gtk
```

## Estructura del Repositorio

```
.config/
├── hypr/
│   ├── hyprland.lua          # Configuración principal
│   └── config/
│       ├── monitors.lua      # Configuración de monitores
│       ├── keyboard.lua      # Configuración del teclado
│       └── nvidiaconfig.lua  # Variables de entorno NVIDIA
└── ags/
    ├── app.ts                # Entry point de AGS
    ├── widget/
    │   └── Bar.tsx           # Barra superior (workspaces, reloj, volumen)
    └── style.scss            # Estilos de la barra
```

## Actualizar Dotfiles

```bash
# Desde el directorio del repo
git add .
git commit -m "update: descripción del cambio"
git push origin master
```

## Restaurar Dotfiles

```bash
# Clonar repo
git clone https://github.com/GodJuegos/DotFile-Johnas.git
cd DotFile-Johnas

# Copiar configuraciones
cp -r .config/hypr ~/.config/
```

## Notas

- Estos dotfiles son para **Arch Linux + Hyprland**
- No incluyen configuraciones de aplicaciones como VS Code, Vivaldi, Cursor, etc.
- Solo configuraciones de personalización del sistema (WM, terminal, launcher, etc.)
- Para aplicaciones específicas, configura cada una por separado
