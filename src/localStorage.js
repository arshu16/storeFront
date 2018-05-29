/* To persist the state between refreshes and navigation, This service provides two methods to load and save state */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null)   {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        //TO_DO: Do something about this
    }
};