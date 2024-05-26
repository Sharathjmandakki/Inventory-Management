package inventoryManagement.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inventoryManagement.Enitys.Users;
import inventoryManagement.Repositories.UserRepo;
import inventoryManagement.Services.Interfaces.*;

@Service
public class UsersServices implements UserInterface {
	@Autowired
	UserRepo ur;

	@Override
	public Login login(Users u) {
		// TODO Auto-generated method stub
		Users usr = getUser(u);
		if (usr == null) {
			return new Login("User dosent exist");
		}
		return new Login(usr.getName(), getPassword(usr, u.getPassword()));

	}

	@Override
	public String register(Users u) {
		if (ur.findByEmail(u.getEmail()) != null) {
			return "this email taken by a another user";
		}
		if (ur.findByMobileNo(u.getMobileNo()) != null) {
			return "this mobile number taken by a another user";
		}
		if (ur.findByMobileNo(u.getName()) != null) {
			return "this user name taken by a another user";
		}
		ur.save(u);
		return "registered";
	}

	@Override
	public String updatePassword(Users u) {
		Users usr = ur.findByEmail(u.getEmail());
		if (usr.getPassword().equals(u.getPassword())) {
			return "present password and old password are same";
		} else {
			usr.setPassword(u.getPassword());
			ur.save(usr);
			return "Password updated";
		}
		// TODO Auto-generated method stub
	}

	@Override
	public String update(Users u) {
		// TODO Auto-generated method stub
//		Users usr=getUser(u);
		System.out.println(u);
		Users usr = ur.findByEmail(u.getEmail());
		if (u.getMobileNo() != null) {
			Users us = ur.findByMobileNo(usr.getMobileNo());
			if (us.getEmail().equals(u.getEmail())) {
				usr.setMobileNo(u.getMobileNo());
			} else if (us != null) {
				return "Mobile Number Exist";
			}
			usr.setMobileNo(u.getMobileNo());
		}
		if (u.getName() != null) {
			Users us = ur.findByName(usr.getName());
			if (us.getEmail().equals(u.getEmail())) {
				usr.setName(u.getName());
			} else if (us != null) {
				return "User name Exist";
			}
			usr.setName(u.getName());
		}
//		if (u.getRole() != null) {
//			usr.setRole(u.getRole());
//		}
		System.out.println(usr);
//		ur.save(usr);
		return "Updated";
	}

	@Override
	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub
		return ur.findAll();
	}

	@Override
	public List<Users> Search(String name) {
		List<Users> us = new ArrayList<Users>();
		try {
			if (getUser(ur.findByName(name)) != null) {
				us.add(getUser(ur.findByName(name)));
			}
		} catch (Exception e) {
			try {
				us.add(getUser(ur.findById(Long.parseLong(name)).get()));	
			}catch(Exception e1){
				return null;
			}
		}
		return us;
	}

	@Override
	public String getPassword(Users u, String password) {
		if (u != null && u.getPassword().equals(password)) {
			return u.getRole();
		} else if (u == null) {
			return "email/username/mobile number dosen't exist";
		} else {
			return "Wrong password";
		}
	}

	@Override
	public Users getUser(Users u) {
		Users usr = ur.findByEmail(u.getEmail());
		if (usr == null) {
			usr = ur.findByName(u.getEmail());
		}
		if (usr == null) {
			usr = ur.findByMobileNo(u.getEmail());
		}
		return usr;
	}

	public Users findByEmail(String email) {
		return ur.findByEmail(email);
	}

	public String deleteUser(Users u) {
		Users usr=ur.findById(u.getUid()).get();
		if(usr.getName().equals(u.getName())) {
			return "You can't delete Yourself";
		}
		// TODO Auto-generated method stub
		ur.deleteById(u.getUid());
		return "Deleted";
	}

	public String upgrade(Users u) {
		// TODO Auto-generated method stub
		try {
		Users usr=ur.findByName(u.getName());
		System.out.println(u);
		usr.setRole(u.getRole());
		ur.save(usr);
		}catch(Exception e) {
			return "Somting went wrong";
		}
		return "Updated";
	}
}
