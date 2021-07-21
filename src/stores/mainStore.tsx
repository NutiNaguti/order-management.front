import CreateOrderFormStore from "./createOrderFormStore";
import FindOrderFormStore from "./findOrderFormStore";
import DataTableStore from "./dataTableStore";
import OrderManagerStore from "./orderManagerStore";

export class mainStore {
    public CreateOrderFormStore: CreateOrderFormStore;
    public FindOrderFormStore: FindOrderFormStore;
    public DataTableStore: DataTableStore;
    public OrderManagerStore: OrderManagerStore;

    constructor() {
        this.CreateOrderFormStore = new CreateOrderFormStore();
        this.FindOrderFormStore = new FindOrderFormStore();
        this.DataTableStore = new DataTableStore();
        this.OrderManagerStore = new OrderManagerStore();
    }
}

export default new mainStore();