import { useState, useEffect } from "react";

const useViewType = () => {
    const [viewType, setViewType] = useState("");

    useEffect(() => {
        const updateViewType = () => {
            const width = window.innerWidth;
            if (width < 768) {
                // Mobile view
                setViewType("mobile");
            } else if (width >= 768 && width < 992) {
                // Tablet view
                setViewType("tablet");
            } else {
                // Desktop view
                setViewType("desktop");
            }
        };
        updateViewType();
        window.addEventListener("resize", updateViewType);
        return () => {
            window.removeEventListener("resize", updateViewType);
        };
    }, []);
    return viewType;
};

export default useViewType;
