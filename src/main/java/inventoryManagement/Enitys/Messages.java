package inventoryManagement.Enitys;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Messages {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long mid;
	String message;
	String user;
	String subject;
	String time;
	public long getMid() {
		return mid;
	}
	public void setMid(long mid) {
		this.mid = mid;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public Messages() {
		super();
	}
	public Messages(long mid,String user,String subject,String message) {
		this.mid=mid;
		this.message=message;
		this.subject=subject;
		this.user=user;
		this.time=LocalDateTime.now().toString();
	}
	@Override
	public String toString() {
		return "Messages [mid=" + mid + ", message=" + message + ", user=" + user + ", subject=" + subject + "]";
	}

}
