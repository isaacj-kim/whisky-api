package wcci.whiskyapi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class WhiskyType {

	
	
	@Id
	@GeneratedValue
	private Long id;
	
	
	private String name;
	
	@SuppressWarnings("unused")
	private WhiskyType() {
		
	}
	
	public WhiskyType(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}
	
	
	public String getName() {
		return name;
	}

}
