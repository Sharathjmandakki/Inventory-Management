package inventoryManagement.Enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long uid;
	String name;
	String email;
	String role="User";
	String password;
	String mobileNo;
	@Override
	public String toString() {
		return "Users [uid=" + uid + ", name=" + name + ", email=" + email + ", role=" + role + ", password=" + password
				+ ", mobileNo=" + mobileNo + "]";
	}
	public Users(long uid, String name, String email, String role, String password,String mobileNo) {
		super();
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.role = role;
		this.password = password;
		this.mobileNo=mobileNo;
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}	
}
