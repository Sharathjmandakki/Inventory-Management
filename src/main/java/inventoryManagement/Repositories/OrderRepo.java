package inventoryManagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.Orders;
import java.util.List;
import inventoryManagement.Enitys.Items;


public interface OrderRepo extends JpaRepository<Orders,Long> {
	List<Orders> findByUser(String user);
	List<Orders> findByDate(String date);
	List<Orders> findByCostomer(String costomer);
}
