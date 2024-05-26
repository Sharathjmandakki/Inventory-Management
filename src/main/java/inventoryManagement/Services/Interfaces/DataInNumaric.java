package inventoryManagement.Services.Interfaces;

public class DataInNumaric {
	long noUsers;
	long noItems;
	long noMsgs;

	public DataInNumaric() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getNoUsers() {
		return noUsers;
	}

	public void setNoUsers(long noUsers) {
		this.noUsers = noUsers;
	}

	public long getNoItems() {
		return noItems;
	}

	public void setNoItems(long noItems) {
		this.noItems = noItems;
	}

	public long getNoMsgs() {
		return noMsgs;
	}

	public void setNoMsgs(long noMsgs) {
		this.noMsgs = noMsgs;
	}

	public DataInNumaric(long noUsers, long noItems, long noMsgs) {
		super();
		this.noUsers = noUsers;
		this.noItems = noItems;
		this.noMsgs = noMsgs;
	}

	@Override
	public String toString() {
		return "DataInNumaric [noUsers=" + noUsers + ", noItems=" + noItems + ", noMsgs=" + noMsgs + "]";
	}

}
