d-i debconf/priority string critical
d-i auto-install/enable boolean true
d-i debian-installer/locale string es_ES.UTF-8
d-i debian-installer/add-kernel-opts string console=tty0 console=ttyS0,115200n8
d-i keyboard-configuration/xkb-keymap select es
d-i netcfg/choose_interface select enp1s0
d-i netcfg/dhcp_timeout string 60
d-i netcfg/get_hostname string {{ $hostname }}
d-i netcfg/get_domain string localdomain
d-i mirror/country string manual
d-i mirror/http/hostname string http.us.debian.org
d-i mirror/http/directory string /debian
d-i mirror/http/proxy string
d-i passwd/root-password password {{ $rootPassword }}
d-i passwd/root-password-again password {{ $rootPassword }}
d-i passwd/user-fullname string {{ $userFullname }}
d-i passwd/username string {{ $username }}
d-i passwd/user-password password {{ $userPassword }}
d-i passwd/user-password-again password {{ $userPassword }}
d-i clock-setup/utc boolean true
d-i time/zone string Europe/Madrid
d-i clock-setup/ntp boolean true
d-i partman-auto/disk string /dev/vda
d-i partman-auto/method string regular
d-i partman-auto/choose_recipe select home
d-i partman-partitioning/confirm_write_new_label boolean true
d-i partman/choose_partition select finish
d-i partman/confirm boolean true
d-i partman/confirm_nooverwrite boolean true
d-i partman-partitioning/confirm_write_new_label boolean true
d-i partman/choose_partition select finish
d-i partman/confirm boolean true
d-i partman/confirm_nooverwrite boolean true
d-i partman-md/confirm boolean true
d-i apt-setup/cdrom/set-first boolean false
d-i apt-setup/use_mirror boolean true
d-i apt-setup/services-select multiselect security, updates
d-i apt-setup/security_host string security.debian.org
tasksel tasksel/first multiselect standard ssh-server
d-i grub-installer/only_debian boolean true
d-i grub-installer/with_other_os boolean false
d-i grub-installer/bootdev string /dev/vda
d-i finish-install/reboot_in_progress note
d-i debian-installer/exit/poweroff boolean true