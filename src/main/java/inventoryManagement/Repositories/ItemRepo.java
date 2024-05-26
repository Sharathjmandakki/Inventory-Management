package inventoryManagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.Items;
import java.util.List;


public interface ItemRepo extends JpaRepository<Items, Long> {
	Items findByBrand(String brand);
	Items findByColor(String color);
	Items findByCatagory(String catagory);
	Items findByName(String name);
}
