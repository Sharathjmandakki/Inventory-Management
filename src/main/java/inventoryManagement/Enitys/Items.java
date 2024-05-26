package inventoryManagement.Enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Items {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String name;
	String brand;
	String color;
	String catagory;
	long cost;
	int qty;
	String location;
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Items(long id, String name, String brand, String color, String catagory, long cost, int qty, String location) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.color = color;
		this.catagory = catagory;
		this.cost = cost;
		this.qty = qty;
		this.location = location;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getCatagory() {
		return catagory;
	}
	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}
	public long getCost() {
		return cost;
	}
	public void setCost(long cost) {
		this.cost = cost;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	@Override
	public String toString() {
		return "Items [id=" + id + ", name=" + name + ", brand=" + brand + ", color=" + color + ", catagory=" + catagory
				+ ", cost=" + cost + ", qty=" + qty + ", location=" + location + "]";
	}
}
