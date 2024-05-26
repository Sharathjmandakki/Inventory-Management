package inventoryManagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import inventoryManagement.Enitys.Users;
import inventoryManagement.Services.UsersServices;
import inventoryManagement.Services.Interfaces.Login;
import jakarta.servlet.http.HttpSession;
@CrossOrigin("*")
@RestController
@RequestMapping
public class UsersController {
	@Autowired
	UsersServices us;
	HttpSession hs;
	@PostMapping("login")
	public Login login(@RequestBody Users u) {
//		this.hs.setAttribute("email", u.getEmail());
		return us.login(u);
	}
	@PostMapping("register")
	public String register(@RequestBody Users u) {
		return us.register(u);
	}
	@PostMapping("updatePassword")
	public String updatePassword(@RequestBody Users u) {
		return us.updatePassword(u);
	}
	@PostMapping("update")
	public String update(Users u) {
		return us.update(u);
	}
	@GetMapping("allUser")
	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub
		return us.getAllUsers();
	}
	@PostMapping("search")
	public List<Users> Search(@RequestBody Users u) {
		return us.Search(u.getName());
	}
	@PostMapping("getuser")
	public Users getMethodName(@RequestBody Users u) {
		return us.getUser(u);
	}
	@PostMapping("deleteuser")
	public String deleteUser(@RequestBody Users u) {
		return us.deleteUser(u);
	}
	@PostMapping("upgrade")
	public String upgrade(@RequestBody Users u) {
		return us.upgrade(u);
	}
}
