package inventoryManagement.Enitys;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long oid;
	@ManyToMany(cascade = CascadeType.ALL)
	List<CartItem> itms;
	long total;
	String user;
	String costomer;
	String date;
	public long getOid() {
		return oid;
	}
	public String getCostomer() {
		return costomer;
	}
	public void setCostomer(String costomer) {
		this.costomer = costomer;
	}

	public void setOid(long oid) {
		this.oid = oid;
	}
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public List<CartItem> getItms() {
		return itms;
	}
	public void setItms(List<CartItem> itms) {
		this.itms = itms;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public Orders(List<CartItem> list, long total,String user,String date,String costomer) {
		super();
		this.itms = list;
		this.total = total;
		this.user=user;
		this.date=date;
		this.costomer=costomer;
	}
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Orders [oid=" + oid + ", itms=" + itms + ", total=" + total + ", user=" + user + ", costomer="
				+ costomer + ", date=" + date + "]";
	}	
}
