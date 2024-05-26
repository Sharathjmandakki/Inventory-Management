package inventoryManagement.Services.Interfaces;

import inventoryManagement.Enitys.Items;

public class CartHelper {
long id;
int qty;
String user;

public CartHelper() {
	super();
	// TODO Auto-generated constructor stub
}
public CartHelper(long id, int qty, String user) {
	super();
	this.id = id;
	this.qty = qty;
	this.user = user;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public int getQty() {
	return qty;
}
public void setQty(int qty) {
	this.qty = qty;
}
public String getUser() {
	return user;
}
public void setUser(String user) {
	this.user = user;
}
@Override
public String toString() {
	return "CartHelper [id=" + id + ", qty=" + qty + ", user=" + user + "]";
}


}
