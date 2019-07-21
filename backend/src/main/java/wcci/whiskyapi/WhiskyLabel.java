package wcci.whiskyapi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class WhiskyLabel {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String labelName;
	
	
	@SuppressWarnings("unused")
	private WhiskyLabel() {
		
	}

	public WhiskyLabel(String labelName) {
	this.labelName = labelName;
	}
	
	public Long getId() {
		return id;
	}

	public String getLabelName() {
		return labelName;
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
		WhiskyLabel other = (WhiskyLabel) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}



