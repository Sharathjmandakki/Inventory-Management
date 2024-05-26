package inventoryManagement.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inventoryManagement.Enitys.Messages;

public interface MessagesRepo extends JpaRepository<Messages, Long>{
	public List<Messages> findByUser(String user);
}
