package inventoryManagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.Cart;
import inventoryManagement.Enitys.CartItem;
import inventoryManagement.Enitys.Items;

import java.util.List;


public interface CartRepo extends JpaRepository<Cart, Long>{
	Cart findByUser(String user);
}
