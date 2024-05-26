package inventoryManagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.CartItem;
import java.util.List;


public interface CartItemRepo extends JpaRepository<CartItem, Long> {
//	List<CartItem> findByIid(long iid);
	CartItem findByName(String name);
}
