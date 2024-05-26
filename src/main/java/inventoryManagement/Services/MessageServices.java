package inventoryManagement.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inventoryManagement.Enitys.Messages;
import inventoryManagement.Repositories.ItemRepo;
import inventoryManagement.Repositories.MessagesRepo;
import inventoryManagement.Repositories.UserRepo;
import inventoryManagement.Services.Interfaces.DataInNumaric;
import inventoryManagement.Services.Interfaces.MessageInterface;

@Service
public class MessageServices implements MessageInterface{
	@Autowired
	MessagesRepo mr;
	@Autowired
	ItemRepo ir;
	@Autowired
	UserRepo ur;
	@Override
	public String addMessage(Messages m) {
		// TODO Auto-generated method stub
		try {
			mr.save(m);
			return "Sent";
		}catch (Exception e) {
			return "Server Error";
		}
	}

	@Override
	public String deleteMessage(Messages m) {
		// TODO Auto-generated method stub
		try {
			System.out.println(m);
			mr.deleteById(m.getMid());
			return "deleted";
		}catch (Exception e) {
			return "Server Error";
		}
	}

	@Override
	public List<Messages> allMessage() {
		// TODO Auto-generated method stub
		return mr.findAll();
	}

	@Override
	public List<Messages> getMessage(Messages m) {
		// TODO Auto-generated method stub
		ArrayList<Messages> al=new ArrayList<Messages>();
		try {
			al.add(mr.findById(Long.parseLong(m.getUser())).get());
		} catch (Exception e) {
			// TODO: handle exception
			al.addAll(mr.findByUser(m.getUser()));
		}
//		if(al.size()==0) {
//			return null;
//		}
		return al;
	}

	public DataInNumaric dataInNumaric() {
		DataInNumaric dn=new DataInNumaric();
		dn.setNoMsgs(mr.findAll().size());
		dn.setNoItems(ir.findAll().size());
		dn.setNoUsers(ur.findAll().size());
		// TODO Auto-generated method stub
		return dn;
	}

}
