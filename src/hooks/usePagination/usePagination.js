import { useEffect, useState } from "react";

const usePagination = () => {
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(6);
    const [pageQuantity, setPageQuantity] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const nextHandle = () => {
        if (pageNumber < pageQuantity - 1) {
            setPageNumber(pageNumber + 1);
        }
    };
    const previousHandle = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    };
    useEffect(() => {
        if (total) {
            setPageQuantity(Math.ceil(total / limit) || 0);
        }
    }, [total, limit]);

    return { setTotal, setLimit, setPageNumber, previousHandle, nextHandle, total, limit, pageQuantity, pageNumber };
};

export default usePagination;