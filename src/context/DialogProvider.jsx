import { createContext, useState } from "react";


const DialogContext = createContext();

// const DialogContext = createContext({dialog:false, setDialog: ()=> {}
// });

export const DialogProvider = ({ children }) => {
    const [dialog, setDialog] = useState(false);

    return (
        <DialogContext.Provider value={{dialog, setDialog}}>
            {children}
        </DialogContext.Provider>
    )
}

export default DialogContext;