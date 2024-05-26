package inventoryManagement.Enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class CartItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	long iid;
	String name;
	long cost;
	int qty;
	public CartItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CartItem(long iid, String name, long cost, int qty) {
		super();
		this.iid = iid;
		this.name = name;
		this.cost = cost;
		this.qty = qty;
	}
	
	public long getIid() {
		return iid;
	}
	public void setIid(long iid) {
		this.iid = iid;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getCost() {
		return cost;
	}
	public void setCost(long cost) {
		this.cost = cost;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	@Override
	public String toString() {
		return "Item [iid=" + iid + ", name=" + name + ", cost=" + cost + ", qty=" + qty + "]";
	}
}
