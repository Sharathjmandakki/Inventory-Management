package inventoryManagement.Services.Interfaces;

import java.util.List;

import inventoryManagement.Enitys.Messages;

public interface MessageInterface {
public String addMessage(Messages m);
public String deleteMessage(Messages m);
public List<Messages> allMessage();
public List<Messages> getMessage(Messages m);
}
