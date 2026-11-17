export declare function usePagination(): {
    pagination: any;
    getParams: () => any;
    onSizeChange: (size: number) => Promise<void>;
    onCurrentChange: (page: number) => Promise<void>;
    onSortChange: (prop: string, order: string) => Promise<void>;
};
