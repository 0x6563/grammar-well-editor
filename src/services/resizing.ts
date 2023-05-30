export class ResizeService {
    static listeners = new Set<() => void>();

    static add(f: () => void) {
        ResizeService.listeners.add(f)
    }

    static remove(f: () => void) {
        ResizeService.listeners.delete(f);
    }

    static update() {
        for (const r of ResizeService.listeners) {
            r();
        }
    }
}