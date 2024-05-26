package inventoryManagement.Enitys;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long cid;
	@ManyToMany (cascade = CascadeType.ALL)
	List<CartItem> items;
	String user;
	String costomer;
	long total;
	public long getCid() {
		return cid;
	}

	public void setCid(long cid) {
		this.cid = cid;
	}

	public String getCostomer() {
		return costomer;
	}

	public void setCostomer(String costomer) {
		this.costomer = costomer;
	}

	public List<CartItem> getItems() {
		return items;
	}

	public void setItems(List<CartItem> items) {
		this.items = items;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public Cart(long cid, List<CartItem> items, String user,long total) {
		super();
		this.cid = cid;
		this.items = items;
		this.user = user;
		this.total=total;
	}

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Cart [cid=" + cid + ", items=" + items + ", user=" + user + ", total=" + total + "]";
	}
}
