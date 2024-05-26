package inventoryManagement.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.Users;
import java.util.List;


public interface UserRepo extends JpaRepository<Users, Long>{
	Users findByName(String name);
	Users findByEmail(String email);
	Users findByMobileNo(String mobileNo);
}
