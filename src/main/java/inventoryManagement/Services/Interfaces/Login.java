package inventoryManagement.Services.Interfaces;

public class Login {
	String username;
	String as;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String as) {
		super();
		this.as=as;
		// TODO Auto-generated constructor stub
	}

	public Login(String username, String as) {
		super();
		this.username = username;
		this.as = as;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAs() {
		return as;
	}

	public void setAs(String as) {
		this.as = as;
	}

	@Override
	public String toString() {
		return "Login [username=" + username + ", as=" + as + "]";
	}
	
}
