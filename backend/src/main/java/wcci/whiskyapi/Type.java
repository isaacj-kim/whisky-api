package wcci.whiskyapi;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Type {

	
	
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToMany(mappedBy = "type")
	private Collection<Brand> brands;
	
	
	
	private String name;
	private String description;
	
	
	
	@SuppressWarnings("unused")
	private Type() {
		
	}
	public Type(String name, String description) {
		this.name = name;
		this.description = description;
		this.brands = new ArrayList<>();
	}
	
	public Long getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public void addBrand(Brand brandName) {
		
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Type other = (Type) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}