package inventoryManagement.Services.Interfaces;
import java.util.List;
import inventoryManagement.Enitys.Users;

public interface UserInterface {
	Login login(Users u);
	String register(Users u);
	String updatePassword(Users u);
	String update(Users u);
	List<Users> getAllUsers();
	List<Users> Search(String name);//get by id also
	String getPassword(Users u, String password);
	Users getUser(Users u);
}
