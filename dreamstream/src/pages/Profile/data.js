export function getServices() {
    return [
        {
            abbr: 'NFX', name: 'Netflix'
        },
        {
            abbr: 'HLH', name: 'Hulu'
        },
        {
            abbr: 'AZP', name: 'Amazon Prime'
        },
        {
            abbr: 'HBO', name: 'HBO Now'
        },
        {
            abbr: 'STZ', name: 'Starz'
        }
    ];
}

export function matchServices(state, value) {
    return (
        state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}
