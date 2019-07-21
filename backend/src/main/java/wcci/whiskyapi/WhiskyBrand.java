package wcci.whiskyapi;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class WhiskyBrand {


	@Id
	@GeneratedValue
	private Long id;
	
	
	private String brandName;


	private Collection<WhiskyLabel> whiskyLabels;


	private WhiskyType whiskyType;
	
	@SuppressWarnings("unused")
	private WhiskyBrand() {
		
	}

	public WhiskyBrand(String brandName, WhiskyType whiskyType) {
		this.brandName = brandName;
		this.whiskyType = whiskyType;
	}
	
	public String getBrandName() {
		return brandName;
	}
	public Long getId() {
		return id;
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
		WhiskyBrand other = (WhiskyBrand) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public void addLabel(WhiskyLabel whiskyLabel) {
		this.whiskyLabels.add(whiskyLabel);
		
		
	}


	public WhiskyType getWhiskyType() {
		// TODO Auto-generated method stub
		return whiskyType;
	}


}
