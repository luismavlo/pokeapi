export const actions = {
    setName: 'SET_NAME',
    setItemPerPage: 'SET_ITEM_PER_PAGE',
    setTheme: 'SET_THEME'
}

export const setName = nameUser =>({
    type: actions.setName,
    payload: nameUser
});

export const setItemPerPage = itemPerPage =>(
    {
        type: actions.setItemPerPage,
        payload: itemPerPage
    }
)

export const setTheme = theme =>(
    {
        type: actions.setTheme,
        payload: theme
    }
)