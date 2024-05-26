package inventoryManagement.Services.Interfaces;
import inventoryManagement.Enitys.Cart;
public interface CartInterface {
public String addToCart(long id,int qty,String user);
public void deleteFromCart(long id,int qty,String user);
public Cart viewCart(String user);
public String billIt(Cart c);
}
