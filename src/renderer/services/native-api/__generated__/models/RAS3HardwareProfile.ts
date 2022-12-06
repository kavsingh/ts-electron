/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The hardware profile is a JSON object with the following fields.
 */
export type RAS3HardwareProfile = {
    /**
     * Number of logical cores.
     */
    cores_log?: number;
    /**
     * Number of physical cores.
     */
    cores_pys?: number;
    /**
     * Clock speed in MHz.
     */
    cpu_clock?: number;
    /**
     * Unique identifier of the CPU, e.g. CPU serial number.
     */
    cpu_id?: string;
    /**
     * Name of CPU.
     */
    cpu_name?: string;
    /**
     * Number of processor packs
     */
    cpu_packs?: number;
    /**
     * Serial number of the primary HD.
     */
    hd_pri?: string;
    /**
     * Memory size in bytes.
     */
    mem?: number;
    /**
     * MAC address of the primary network interface.
     */
    net_pri?: string;
    /**
     * Operating system described by defined strings.
     */
    os_type?: RAS3HardwareProfile.os_type;
    /**
     * Unique system id as reported by the operating system.
     */
    os_uuid?: string;
    /**
     * Major version of the OS
     */
    os_ver_maj?: number;
    /**
     * Minor version of the OS
     */
    os_ver_min?: number;
};

export namespace RAS3HardwareProfile {

    /**
     * Operating system described by defined strings.
     */
    export enum os_type {
        OS_WIN_IA32 = 'os_win_ia32',
        OS_MAC_IA32 = 'os_mac_ia32',
        OS_LINUX_IA32 = 'os_linux_ia32',
        OS_WIN_X64 = 'os_win_x64',
        OS_MAC_X64 = 'os_mac_x64',
        OS_LINUX_X64 = 'os_linux_x64',
        OS_LINUX_AARCH64 = 'os_linux_aarch64',
        OS_LINUX_ARMV7 = 'os_linux_armv7',
        OS_MAC_ARM64 = 'os_mac_arm64',
        OS_UNKNOWN = 'os_unknown',
    }


}

