package inventoryManagement.Services;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import inventoryManagement.Enitys.Cart;
import inventoryManagement.Enitys.CartItem;
import inventoryManagement.Enitys.Items;
import inventoryManagement.Enitys.Orders;
import inventoryManagement.Repositories.CartItemRepo;
import inventoryManagement.Repositories.CartRepo;
import inventoryManagement.Repositories.ItemRepo;
import inventoryManagement.Repositories.OrderRepo;
import inventoryManagement.Services.Interfaces.CartInterface;

@Service
public class CartServices implements CartInterface {
	@Autowired
	CartRepo cr;
	@Autowired
	ItemRepo ir;
	
	@Autowired
	CartItemRepo cir;
	@Autowired
	OrdersServices os;

	@Override
	public String addToCart(long id, int qty, String user) {
		ArrayList<CartItem> ci = new ArrayList<CartItem>();
		Items itm = ir.findById(id).get();
		CartItem i=new CartItem(id,itm.getName(),itm.getCost(),qty);
		try { 
			Cart c = viewCart(user);
			boolean present=false;
			for(CartItem j:c.getItems()) {
				CartItem res=j;
				if(j.getName().equals(itm.getName())) {
					res.setQty(res.getQty()+qty);
					present=true;
				}
				ci.add(res);
			}
			if(!present) {
				ci.add(i);
			}
			c.setItems(ci);
			c.setUser(user);
			c.setTotal(c.getTotal()+qty*itm.getCost());
			cr.save(c);
		} catch (Exception e) {
			Cart c = new Cart();
			ci.add(i);
			c.setItems(ci);
			c.setTotal(qty*itm.getCost());
			c.setUser(user);
			cr.save(c);
		}
		return "Added";
	}
	

	@Override
	public void deleteFromCart(long id, int qty, String user) {
		Cart c = viewCart(user);
		List<CartItem> ci = c.getItems();
		ArrayList<CartItem> al=new ArrayList<>();
		for(CartItem i:ci) {
			if(i.getId()!=id) {
				al.add(i);
			}else {
				c.setTotal(c.getTotal()-i.getCost()*qty);
			}
		}
		c.setItems(al);
		cr.save(c);
	}

	@Override
	public Cart viewCart(String user) {
		// TODO Auto-generated method stub
		try {
			Cart c = cr.findByUser(user);
		return c;
		}catch (Exception e) {
			return null;
		}
	}

	@Override
	public String billIt(Cart c) {
		Cart ct=cr.findByUser(c.getUser());
		ct.setCostomer(c.getCostomer());
		ArrayList<Items> al=new ArrayList<>();
		for (CartItem i : ct.getItems()) {
			Items itm = ir.findById(i.getIid()).get();
			if(itm.getQty() - i.getQty()>0) {
				itm.setQty(itm.getQty() - i.getQty());
			}else {
				return itm.getName()+"Out of Stock" ;
			}
			al.add(itm);
		}
		ir.saveAll(al);
		os.addToOrders(ct);
		clearAll(c);
		return "Your order is booked";
	}
	public void clearAll(Cart c) {
		Cart crt=cr.findByUser(c.getUser());
		if(crt!=null) {
			for(CartItem ct:crt.getItems()) {
				cir.deleteById(ct.getId());
			}
			cr.deleteById(crt.getCid());
		}
	}
	
	// Admin part
	public String buyAll(Cart c) {
		Cart ct=cr.findByUser(c.getUser());
		ArrayList<Items> al=new ArrayList<>();
		for (CartItem i : ct.getItems()) {
			Items itm = ir.findById(i.getIid()).get();
			if(itm.getQty() - i.getQty()>0) {
				itm.setQty(itm.getQty() + i.getQty());
			}else {
				return itm.getName()+"Out of Stock" ;
			}
			al.add(itm);
		}
		ir.saveAll(al);
		os.addToOrders(ct);
		clearAll(c);
		return "Your order is booked";
	}
}
