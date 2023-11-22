export function getTitle(action: string) {
    switch (action) {
        case 'plants':
            return 'This product plants'
        case 'offsets':
            return 'This product offsets'
        case 'collects':
            return 'This product collects'
        default:
            return 'This product helps you'
    }
}